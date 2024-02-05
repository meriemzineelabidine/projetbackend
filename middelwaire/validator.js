const { check, validationResult } = require("express-validator");
exports.RulesRegister = () => [
  
    check("name", "name is required").notEmpty(),
    check("lastname", "last name is required").notEmpty(),
    check("email", "email is required").notEmpty(),
    check("email", "chek email again").isEmail(),
    check("password", "password must be between 6 and 10").isLength({
      min: 6,
      max: 10,
    }),
  ];

exports.RulesLogin = () => [
    
      check("email", "email is required").notEmpty(),
      check("email", "chek email again").isEmail(),
      check("password", "password must be between 6 and 10").isLength({
        min: 6,
        max: 10,
      }),
    ];
  
exports.validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(404).send({ errors: errors.array().map((el)=>({msg:el.msg})) });
  }
  next();
};
