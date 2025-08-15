const Contact = require('../models/CotactUs');

class ContactUsController {
    async create (req, res) {
        const {
            name,
            mobile,
            email
        } = req.body;

        if(!name) return res.status(400).json({message: "Name is required!"});
        if(!mobile) return res.status(400).json({message: "Mobile number is required!"});
        if(!email) return res.status(400).json({message: "Email is required!"});

        //await sendContactEmail(name, email, mobile, req.body.subject, req.body.message)

        try {
            const contact = await Contact.create({...req.body});
            res.json({success: true})
        } catch (error) {
            console.log(error)
            res.status(500).json({message: "Internal server error"})
        }
    }

    async getAll (req, res) {

        const {page} = req.params;

        let skipCount = 0;
        const {s} = req.query;

        
        if(page){
            skipCount = (page - 1) * 10;
        }

        let filter = {}

        if(s){
            let term = "$or";
            filter[term] = [
                {name: new RegExp(s, 'i')},
                {email: new RegExp(s, 'i')},
                {mobile: new RegExp(s, 'i')}
            ]
        }

        try {
            const messages = await Contact.find(filter).skip(skipCount).limit(10);
            const total = await Contact.find(filter);
            res.json({messages, total: total.length})
        } catch (error) {
            console.log(error);
            res.status(500).json(error)
        }
        
    }

    async delete (req, res) {


        try {
            const message = await Contact.findOne({_id: req.params.id});
            if(!message) return res.status(400).json({message: "Message not foud"});
            let deleted = await Contact.findOneAndDelete({_id: req.params.id});
            return res.status(200).json({message: "Message Deleted"})
        } catch (error) {
            console.log(error)
            res.status(500).json({message: "Internal Server Error"})
        }

    }
}

module.exports = new ContactUsController;