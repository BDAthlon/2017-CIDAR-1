const mongoose = require('mongoose');

const Schema = mongoose.Schema


const issueSchema = new mongoose.Schema({
  payload: String,
}, { timestamps: true });

/**
 * Check before saving
 */
issueSchema.pre('save', function save(next) {
});

/**
 * Example method
 * @param libraryname
 */
issueSchema.methods.createNewVLibaray = function createNewLibrary(libraryname){
  console.log("Create new libary : " + libraryname );
};

const Issue = mongoose.model('Issue', issueSchema);

module.exports = Issue;
