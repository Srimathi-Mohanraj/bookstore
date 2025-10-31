onst mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
name: String,
email: String,
passwordHash: String
});
module.exports = mongoose.model('User', UserSchema);