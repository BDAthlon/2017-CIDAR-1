const mongoose = require('mongoose');

const Schema = mongoose.Schema


const vLibrarySchema = new mongoose.Schema({
  name: String,
  type: String,
  libraries: [{ type: Schema.Types.ObjectId, ref: 'Library' }]
}, { timestamps: true });

/**
 * Check before saving
 */
vLibrarySchema.pre('save', function save(next) {
});

/**
 * Example method
 * @param libraryname
 */
vLibrarySchema.methods.createNewVLibaray = function createNewLibrary(libraryname){
  console.log("Create new libary : " + libraryname );
};



const VLibrary = mongoose.model('VLibrary', vLibrarySchema);

module.exports = VLibrary;
