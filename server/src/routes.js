const AuthenticationController = require('./controllers/AuthenicationController')

const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
    app.post('/register', 
    AuthenticationControllerPolicy.register,
     AuthenticationController.register)
}
