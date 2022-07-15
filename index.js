const express = require('express');
const mongoose = require('mongoose');

require('dotenv/config')

const app = express();

app.get('/', (req, res) => {
    console.log
    res.send('<h1>Hellow orld</h1>')
})

console.log(process.env.MONGO_URL)
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('mongo db running')
}).catch((error) => {
   console.log(error);
})




app.listen(3000, () => {
    console.log('Our server is running')
})