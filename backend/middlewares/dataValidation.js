const Joi = require("joi");

module.exports.userValidation = (req, res, next)=>
{
    const userValidationSchema = Joi.object({
            username : Joi.string().required(),
            email : Joi.string().email(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9_@#-]{3,30}$')).required()
    });
    const {error} = userValidationSchema.validate(req.body);
    if(error)
    {
        const errList = error.details.map((el=>el.message)).join("\n");
        return res.status(406).json({success: false, message : errList});
    }else
    {
        next();
    }
}

module.exports.taskValidation = (req, res, next)=>
{
    const taskValidationSchema = Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        status : Joi.string().required().valid('Pending', 'In Progress', 'Completed').message("Bad value of status"),
        dueDate : Joi.date().required().message("Due Date of task is required")
    });
    const {error} = taskValidationSchema.validate(req.body);
    if(error)
    {
        const errList = error.details.map(e => e.message).join("\n");
        return res.status(406).json({success: false, message : errList});
    }else
    {
        next();
    }
}