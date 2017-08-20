
var userController = require('../controllers/user.controller');


// products routes
module.exports = function(app) {

    app.post('/getAllUsers/', userController.getAllUsers);	// get one user

    app.post('/getUser/', userController.getUser);	// get one user

    app.post('/addUser/', userController.addUser);	// get one user

};