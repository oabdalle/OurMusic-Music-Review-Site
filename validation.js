
//Validation
const Joi = require('@hapi/joi');
//Register Validation
const registerValidation = (data) => {
    
    const schema =Joi.object({
    password: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email()
});
return schema.validate({password:data.password, email: data.email});
}
const loginValidation = (data) => {
    const schema =Joi.object({
    password: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email()
});
return schema.validate({password:data.password, email: data.email});
}
module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
