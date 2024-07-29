import Joi from "joi"

const userValidate = Joi.object({

    fName: Joi.string()
        .min(3)
        .max(30)
        .required(),
    lName: Joi.string()
        .max(30)
        .min(3)
        .required(),
    email: Joi.string()
        .email()
        .required(),
    mobileNo: Joi.number()
        .required(),
    education: Joi.string()
        .max(8)
        .required(),
    password: Joi.string()
        .min(8)
        .required(),
})

const userLoginValidate = Joi.object({

    email: Joi.string()
        .email()
        .required(),
    password: Joi.string()
        .min(8)
        .required(),
})

export default { userValidate, userLoginValidate } 