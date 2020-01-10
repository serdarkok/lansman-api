# nodejs-auth-api

To Start:

# npm run start

Jsonwebtoken kullanılmıştır. Mongo DB üzerinden kullanıcı 

# Routes

/register

userController.postNewuserController

This method is used that create a new user. You can post some information under the postman.

Example: 
{
	"name" : "john",
	"surname": "turner",
	"email": "john.turner@bla.com",
	"password": "12345"
}

/login

userController.postLoginController

This method is used that username and password control.


/deleteAll

userController.deleteAllUserController

This method is used that delete all users. Attention, delete all users!

/verifyToken

userController.verifyTokenController

This method is used that control user token.
