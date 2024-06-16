const Joi = require("joi")

const userCreateDTO = Joi.object({
    name:Joi.string().regex(/^[a-zA-Z]+$/).min(2).max(50).required().messages({
        "string.empty":"Name is compulsory",
        "string.min":"Name should contain atleast 2 characters",
        "string.pattern.base":"Name can only contain alphabets and space"
    }),
    email:Joi.string().email().required(),
    password:Joi.string().regex(/^(?=.*[\d])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,25}$/).required().messages({
        "string.pattern.base":"Password must contain one lowercase, one uppercase, one special character and must be 8-25 characters long"
    }),
    confirmPassword:Joi.string().equal(Joi.ref('password')).required().messages({
        "string.pattern.base":"Password must match"
    }),
    address:Joi.string().empty().optional(),
    phone:Joi.string().min(10).max(15),
    image:Joi.string().optional(),
    role:Joi.string().regex(/^(admin|seller|customer)$/).required().messages({
        "string.pattern.base":"Role can be admin or seller or customer"
    })
})

module.exports = {userCreateDTO}