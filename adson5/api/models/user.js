const mongoose = require('mongoose');

const userSchema = mongoose.Schema({ 
    email: {type: String,
         require: true,
          unique: true,
          match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
        },
    password: { type: String, require: true},
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    }

});


module.exports = mongoose.model('User',userSchema);