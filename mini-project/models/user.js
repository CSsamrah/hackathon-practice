const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://admin:admin@cluster0.liqc9va.mongodb.net/testapp1");

const userSchema = mongoose.Schema({
    image: String,
    email: String,
    name: String
})

module.exports = mongoose.model('user', userSchema);