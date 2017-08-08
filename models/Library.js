const mongoose = require('mongoose');

const Schema = mongoose.Schema


const librarySchema = new mongoose.Schema({
  payload: String,
  version: String,
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  issues: [{ type: Schema.Types.ObjectId, ref: 'Issue' }],
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
}, { timestamps: true });

/**
 * Check before saving
 */
librarySchema.pre('save', function save(next) {
});

/**
 * Example method
 * @param libraryname
 */
librarySchema.methods.createNewVLibaray = function createNewLibrary(libraryname){
  console.log("Create new libary : " + libraryname );
};



const Library = mongoose.model('Library', librarySchema);

module.exports = Library;
