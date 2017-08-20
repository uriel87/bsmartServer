
var userSchema = require('mongoose').model('User');


/* ----------------------------------
 * get all users function
 * @param req
 * @param res
 -------------------------------------*/

exports.getAllUsers = function (req,res) {
    console.log('in controller getAllUsers');
    userSchema.find({},function (err, userDoc) {
        if(err) {
            console.log(err);
            res.status(200).json({
                status: "404",
                msg: " Database error in function getUser, user.controller.js",
                err: err
            });
        }
        else {
            console.log("controller getAllUsers: " + userDoc);
            res.status(200).json(userDoc);
        }
    });
};




/* ----------------------------------
 * get user function
 * @param req
 * @param res
 -------------------------------------*/

exports.getUser = function (req,res) {
    console.log('in controller getUser');

    var query = {
        email: req.body.email
    }

    userSchema.find(query,function (err, userDoc) {
        if(err) {
            console.log(err);
            res.status(200).json({
                status: "404",
                msg: " Database error in function getUser, user.controller.js",
                err: err
            });
        }
        else {
            console.log("controller getUser: " + userDoc);
            res.status(200).json(userDoc);
        }
    });
};




/* ----------------------------------------------------
 * set user function
 * @param req
 * @param res
 -------------------------------------------------------*/


exports.addUser = function(req,res) {
    console.log('in controller addUser');

    var newUser = new userSchema({
        name: req.body.name,
        email: req.body.email,
        image: req.body.image,
        birthday: req.body.birthday
    });


    newUser.save(function(err, userDoc) {
        if(err) {
            console.log(err);
            res.status(200).json({
                status: "404",
                msg: " Database error in function addUser, user.controller.js",
                err: err
            });
        }
        else {
            console.log("the user " + userDoc + "was added");
            res.status(200).json(userDoc);
        }

    });

};



