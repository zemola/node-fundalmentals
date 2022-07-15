const mongoose = required('mongoose');


const foodSchema = mongoose.Schema({
    price: { type: Number,
             required: true
            }, 
    name: { type: Number,
        required: true
       },
    description: String,
    Image: String
}, {
    timestamps: true
}
)

module.exports = mongoose.model('Food', foodSchema);