const joi=require('joi');



const UserSchema=joi.object().keys({

    name:joi.string().min(3).max(30).required(),
    address:joi.string().min(5).required(),
    phone:joi.string().min(10).max(10).required(),

})

module.exports=UserSchema;