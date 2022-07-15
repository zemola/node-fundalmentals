const mongoose = required('mongoose');


const OderSchema = mongoose.Schema({
    date: Date,
    description: String,
    recepentsName: String,
    address: String,
    email: String,
    phoneNumber: Number,
    paymentMode: {
        type: String
    } ,
})

module.exports = mongoose.model('Oder', OderSchema);