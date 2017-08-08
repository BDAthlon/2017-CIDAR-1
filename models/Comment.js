const mongoose = require('mongoose');

const Schema = mongoose.Schema


const commentSchema = new mongoose.Schema({
  payload: String,
}, { timestamps: true });

/**
 * Check before saving
 */
commentSchema.pre('save', function save(next) {
});

/**
 * Example method
 * @param libraryname
 */
commentSchema.methods.createNewVLibaray = function createNewLibrary(libraryname){
  console.log("Create new libary : " + libraryname );
};

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
