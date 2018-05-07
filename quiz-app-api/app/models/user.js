var db = require('./db')
var user = db.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
        //unique: true
    },
    password: {
        type: String,
        required: true
        //select: false
    },
    cgiCode: {
        type: String,
        required: true
        //unique: true
    },
    photo: {
        type: String
    },   
    userRole: {
        type: String,
        required: true
        // enum: ['USER', 'ADMIN', 'PRESENTER'],
        // default: 'USER'
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        default: new Date()
    }
})


module.exports = db.model("User", user)