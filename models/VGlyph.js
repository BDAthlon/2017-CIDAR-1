const mongoose = require('mongoose');
const Glyph = require('./Glyph');

const Schema = mongoose.Schema;


const vGlyphSchema = new mongoose.Schema({
    name: String,
    type: String,
    currentversion: Number,
    glyphs: [{type: Schema.Types.ObjectId, ref: 'Glyph'}]
}, {timestamps: true});

/**
 * Check before saving
 */
vGlyphSchema.pre('save', function save(next) {
});

/**
 * Example method
 * @param libraryname
 */
vGlyphSchema.methods.createNewVLibaray = function createNewLibrary(libraryname) {
    console.log("Create new libary : " + libraryname);
};

vGlyphSchema.methods.createNewGlyphVersion = function createNewGlyphVersion(userid, svg) {
    console.log("Creating a new version of the Glyph for this glyph");
    var newglyph = Glyph({payload: svg, author: userid});
    this.glyphs.push(newglyph);
    this.save();
}

const VGlyph = mongoose.model('VGlyph', vGlyphSchema);

module.exports = VGlyph;
