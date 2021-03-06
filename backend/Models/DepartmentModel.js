const mongoose = require('mongoose');
const ObjectID = mongoose.Schema.Types.ObjectId;

const DepartmentSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true},
    faculty: {type: ObjectID, ref: 'Faculty', required: true},
    HOD: {type: ObjectID, ref: 'AcademicStaff'}
}, 

{
    strict: false,
    timestamps: true
});

module.exports = mongoose.model('Department', DepartmentSchema);