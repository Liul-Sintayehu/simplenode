const UserModel = require("./Model");

const All = (req,res)=>{
    UserModel.find()
    .then(response=>[
        res.json(response)
    ])
}
const Insert = (req,res)=>{
    try {
        const data = req.body
        const user = new UserModel(data);
        user.save()
        .then(respose=>{
            res.json({mssg:'data was inserted'});
        })
    } catch (error) {
        res.json(err)
    }
}

module.exports = {
    All,
    Insert
}