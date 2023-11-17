import mongoose from 'mongoose';

// Schema for users collection
const usersSchema = new mongoose.Schema({
    is_admin: { type: Boolean, default: false },
    first_name: { type: String, trim: true, required: [true, "Please enter a first name"] },
    last_name: { type: String, trim: true, required: [true, "Please enter a last name"] },
    email: { type:String, required: [true, "Please enter a student email"] },
    address: {
        street_number: { type: Number, trim: true },
        street_name: { type: String, trim: true },
        city: { type: String, trim: true },
        province: { type: String, trim: true },
        postal_code: { type: String, trim: true }
    },    
    user_name: {
        type: String,
        default: function(){
            return this.email; // if it does not work as expected, please set default on the controller - create user.
        }
    },
    hashed_password: { type: String, required: [true, "Please enter a password."] }, // Expect to modify to work with authentication
    program: { type: mongoose.Schema.Types.ObjectId, ref: 'program' },
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'courses' }],
    created: { type:Date, default:Date.now },
    updated: { type:Date, default:Date.now }
});

const users = mongoose.model('users', usersSchema);

export default users;