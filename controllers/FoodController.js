const Order = require('../models/Order');


exports.create = (req, res) => {
    const data = req.body;
    const requiedFields = ['price', 'name', 'description', ];

    const missingField = requiedFields.filter(key => {
        return !Object.key(data).includes(key)
    })

}

exports.readAll = async(req, res) => {
    const food = await Food.find()

    
}
exports.create = (req, res) => {
    
}

exports.create = (req, res) => {
    
}

exports.create = (req, res) => {
    
}