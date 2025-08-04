const express = require('express');
const AdminAuth = require('./controllers/adminAuth');
const BlogControlle = require('./controllers/blogController');
const ContactController = require('./controllers/contactUsController');
const ApplicationController = require('./controllers/applicationController');
const EiborController = require('./controllers/eiborController');



const router = express.Router();

router.post('/api/admin/auth/create', AdminAuth.create);
router.post('/api/admin/auth/login', AdminAuth.login);
router.get('/api/admin/auth/auto', AdminAuth.autoLog);
router.get('/api/admin/auth/logout', AdminAuth.logout);
router.post('/api/admin/auth/otp', AdminAuth.sentOtp);
router.post('/api/admin/auth/verify', AdminAuth.verifyOtp);
router.post('/api/admin/auth/update', AdminAuth.updatePassword);






router.post('/api/admin/blog/create', BlogControlle.create)
router.get('/api/admin/blog/get/:page', BlogControlle.getAll);
router.get('/api/admin/blog/delete/:id', BlogControlle.delete);
router.get('/api/admin/blog/getbyid/:id', BlogControlle.getById);
router.post('/api/admin/blog/update/:id', BlogControlle.edit);




router.get('/api/admin/contact/get/:page', ContactController.getAll);
router.get('/api/admin/contact/delete/:id', ContactController.delete);

router.get('/api/admin/application/get/:page', ApplicationController.getApplication);
router.get('/api/admin/application/getbyid/:id', ApplicationController.getByID);
router.post('/api/admin/application/update/:id', ApplicationController.updateStatus);
router.get('/api/admin/application/delete/:id', ApplicationController.deleteApplication);
router.get('/api/admin/application/export', ApplicationController.exportApplication)
router.post('/api/admin/eibor/update', EiborController.updateEibor);
router.get('/api/admin/eibor/get', EiborController.getEibor)




//user routes
router.get('/api/user/blog/get/:page', BlogControlle.getAll);
router.get('/api/user/blog/posts/:slug', BlogControlle.getPostBySlug);

router.post('/api/user/contact/create', ContactController.create);

router.post('/api/user/application/create', ApplicationController.create);
router.post('/api/user/application/update/:id', ApplicationController.updateStatus)
router.get('/api/user/application/get/:id', ApplicationController.getByID);

router.get('/api/user/eibor/get', EiborController.getEibor)







module.exports = router;