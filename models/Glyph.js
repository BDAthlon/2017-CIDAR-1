const mongoose = require('mongoose');

const Schema = mongoose.Schema


const glyphSchema = new mongoose.Schema({
  payload: String,
  version: String,
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  issues: [{ type: Schema.Types.ObjectId, ref: 'Issue' }],
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
}, { timestamps: true });

/**
 * Check before saving
 */
glyphSchema.pre('save', function save(next) {
});

/**
 * Example method
 * @param libraryname
 */
glyphSchema.methods.createNewVLibaray = function createNewLibrary(libraryname){
  console.log("Create new libary : " + libraryname );
};



const Glyph = mongoose.model('Glyph', glyphSchema);

module.exports = Glyph;
