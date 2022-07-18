const mongoose = required('mongoose');


const foodSchema = mongoose.Schema({
    price: { type: Number,
             required: true
            }, 
    name: { type: Number,
            required: true
          },
    description: {
        type: String,
        required: true
        },
    Image: {
        type: String,
        required: true
        },
}, {
    timestamps: true
}
)

module.exports = mongoose.model('Food', foodSchema);