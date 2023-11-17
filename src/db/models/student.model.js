const mongoose = require('mongoose');

const studentSchema = mongoose.Schema(
    {
        firstname: { type: String, required: [true, "Please enter a first name"] },
        lastname: { type: String, required: [true, "Please enter a last name"] },
        email: { type: String, required: [true, "Please enter a student email"] },
        password : { type: String, required: [true, "Please enter a student email"] },
        created : { type: Date, default: Date.now },
        updated : { type: Date }
    }
)

const users = mongoose.model('users', studentSchema);

module.exports = users;