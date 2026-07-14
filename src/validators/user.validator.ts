import joi from 'joi';

export const userValidator = joi.object({
    username: joi.string().pattern(/w{4,}/).required().messages({
        "string.pattern.base":"name must have at least 4 characters",
    }),
    password: joi.string().min(3).max(6).required().messages({
        "string.min": "password must be at least 3 characters",
        "string.max": "password must be at least 6 characters",
    }),
    age:joi.number().min(1).max(117).required().messages({
        "number.min": "age must be >1",
        "number.max": "age must be <117",
    })
})