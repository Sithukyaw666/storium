const { allow } = require("joi");
const joi = require("joi");
const createUserValidation = (object) => {
  const schema = joi.object({
    username: joi.string().min(6).max(255).required(),
    email: joi
      .string()
      .email({
        tlds: { allow: ["com"] },
      })
      .max(255)
      .required(),
    password: joi.string().min(8).max(255).required(),
  });

  return schema.validate(object);
};
const loginValidation = (object) => {
  const schema = joi.object({
    email: joi
      .string()
      .email({
        tlds: { allow: ["com"] },
      })
      .max(255)
      .required(),
    password: joi.string().min(8).max(255).required(),
  });

  return schema.validate(object);
};

module.exports = {
  createUserValidation,
  loginValidation,
};
