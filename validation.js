
//Validation
const Joi = require('@hapi/joi');
//Register Validation
const registerValidation = (data) => {
    // console.log("Im in the validation.js!");
    // console.log(data);
    const schema =Joi.object({
    // username: Joi.string().min(6).required(),
    password: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email()
});
//return schema.validate({username:data.username, password:data.password, email: data.email});
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
