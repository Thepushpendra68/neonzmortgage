const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const sendOtp = require('../services/email/sendOtp')

const Admin = require('../models/Admin');


const accessTokenSecrete = process.env.ADMIN_ACCESS_TOKEN_SECRETE;
const refreshTokenSecrete = process.env.ADMIN_REFRES_TOKEN_SECRETE;

const crypto = require('crypto');

class AdminAuth {

    ///create admin
    async create (req, res) {

        const {email, password} = req.body;

        if(!email) return res.status(400).json({message : "Email is required"});
        if(!password) return res.status(400).json({message: "Password is required"})

        const admin = await Admin.findOne({email: req.body.email});
        if(admin){
            return res.status(400).json({message: 'Email already in use'})
        }
       
        const salt = await bcryptjs.genSalt(10);
        const hashP = await bcryptjs.hash(req.body.password, salt)
        
        const data = {...req.body, password: hashP}
        const newAdmin = await Admin.create(data)
        res.json(newAdmin)

    }

    //login admin
    async login(req, res) {

        const {email, password} = req.body;

        if(!email) return res.status(400).json({message: "Email is required"});
        if(!password) return res.status(400).json({message: "Password is required"});

        let admin = await Admin.findOne({email});

        if(!admin) return res.status(400).json({message: "Email does not exist"});

        const match = await bcryptjs.compare(password, admin.password);

        if(!match) return res.status(400).json({message: "Wrong Password"});

       
        const accessToken = await jwt.sign({_id: admin._id, email: admin.email}, accessTokenSecrete, {expiresIn: '1 days'});
        

        res.cookie('accessToken', accessToken, {
            maxAge: 1000 * 60 * 60 * 24,
            httpOnly: true,
            path: '/api/admin'
        })

        return res.json({status: true, admin, message: "Logged in."})
        

    }


    //auto login admin
    async autoLog(req, res) {

        const {accessToken} = req.cookies;
        if(accessToken){

            let adminData;
            try {

                adminData = await jwt.verify(accessToken, accessTokenSecrete)
                
            } catch (error) {
                console.log(error)
                return res.status(400).json({message: "Token Expired"});
            }
        
        if(adminData){
            let admin = await Admin.findOne({_id: adminData._id});
            return res.json({status: true, admin, message: "Logged in."})
        }
        }else{
            res.json({auth: false})
        }

    }

    async logout (req, res) {
        
        await res.clearCookie('accessToken', {path: '/api/admin'});

        res.json({isAuth: false, admin: null});
    }

    async sentOtp (req, res) {
        const { email } = req.body;
        if(!email) return res.status(400).json({message: 'Email is required'});

        let admin;
        try {
            admin = await Admin.findOne({ email: email });
            if (!admin) {
                return res.status(400).json({ message: 'No admin acount found.' });
            }
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: 'Db error' });
        }

        const otp = crypto.randomInt(1000, 9999)

        const ttl = 1000 * 60 * 5; // 2 min
        const expires = Date.now() + ttl;
        const data = `${email}.${otp}.${expires}`;
        const hash = crypto.createHmac('sha256', process.env.HASH_SECRET).update(data).digest('hex')

        try {
            await sendOtp(email, otp)
            res.json({
                hash: `${hash}.${expires}`,
                email,
                otp
            });
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: 'message sending failed' });
        }
    }

    async verifyOtp (req, res) {
        const { otp, hash, email } = req.body;
        if (!otp || !hash || !email) {
            return res.status(400).json({ message: 'All fields are required!' });
        }

        const [hashedOtp, expires] = hash.split('.');
        if (Date.now() > +expires) {
            return res.status(400).json({ message: 'OTP expired!' });
        }

        const data = `${email}.${otp}.${expires}`;
        let computedHash = crypto.createHmac('sha256', process.env.HASH_SECRET).update(data).digest('hex')
        
        if (hashedOtp != computedHash) {
            return res.status(400).json({ message: 'Invalid OTP' });
        }

        let admin = await Admin.findOne({email: email});
        res.json({admin_id: admin._id})
    }

    async updatePassword (req, res) {
        const {password, confirmPaddword, adminId} = req.body;

        if(!password) return res.status(400).json({message: "Password is required"});
        if(!confirmPaddword) return res.status(400).json({message: "Confirm password is required"});
        if(password != confirmPaddword) return res.status(400).json({message: "Password dind't match"});
        if(!adminId) return res.status(400).json({message: "Unauthorise access"})

        const salt = await bcryptjs.genSalt(10);
        const hashP = await bcryptjs.hash(req.body.password, salt)

        await Admin.findOneAndUpdate({_id: req.body.adminId}, {$set: {password: hashP}});

        res.json({updated: true})
    }
}

module.exports = new AdminAuth;