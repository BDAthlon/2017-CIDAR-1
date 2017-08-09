
const VGlyph = require('../models/VGlyph');
const VLibrary = require('../models/VLibrary');
const User = require('../models/User');
const Organization = require('../models/Organization');
const Glyph = require('../models/Glyph');
const Library = require('../models/Library');

exports.ping = function (req, res) {
    res.send(req.user._id);
}

exports.getGlyph = function (req, res) {
    var glyphid = req.body.glyph_id;
    VGlyph.findById(glyphid, function (err, glyph) {
        if(err) {res.sendStatus(500); throw err;}
        res.send(glyph);
    });
};

exports.createGlyph = function (req, res) {
    var userid = req.user._id;
    var glyphname = req.body.glyph_name;
    var glyphtype = req.body.glyph_type;
    var newglyph = new VGlyph({
        name: glyphname,
        type: glyphtype
    });
    newglyph.save();
    newglyph.createNewGlyphVersion(userid, req.payload);

    User.findByIdAndUpdate(userid, { $push: { glyphs: newglyph._id } }, { safe: true, upsert: true }, function(err, user) {
        if (err) { res.sendStatus(500); throw err; }
    });
};


exports.deleteGlyph = function (req, res) {
    var userid = req.user._id;
    var glyphid = req.body.glyph_id;

    User.findByIdAndUpdate(userid, { $pull: { glyphs: glyphid } }, function(err, data){
        if(err) {res.sendStatus(500); throw err;}
        VGlyph.findByIdAndRemove(glyphid, function (err, data) {
            if(err) {res.sendStatus(500); throw err;}
            res.send(200);
        });
    });
}


exports.updateGlyph = function (req, res) {
    var userid = req.user._id;
    var glyphid = req.body.glyph_id;
    var payload = req.payload;//Handle SVG uploads
    VGlyph.findById(glyphid, function (err, vglyph) {
        if(err) {res.sendStatus(500); throw err;}
        vglyph.createNewGlyphVersion(userid, payload);
        vglyph.version++;
        vglyph.save();
    });
}


exports.getLibrary = function (req, res) {
    var libraryid = req.body.library_id;
    console.log("Querying Library: " + libraryid);
    VLibrary.findById(libraryid, function (libraryid, library ) {
        if(err) {res.sendStatus(500); throw err;}
        res.send(library);
    });

}

exports.createLibrary = function (req, res) {
    var userid = req.user._id;
    var libraryname = req.body.library_name;
    var glyphstoinclude = req.body.glyph_collection;

    var newlibrary = new VLibrary();
    newlibrary.name = libraryname;
    newlibrary.glyphs.push(glyphstoinclude);
    newlibrary.save();

    User.findByIdAndUpdate(userid, { $push: { libraries: newlibrary._id } }, { safe: true, upsert: true }, function (err, user) {
        if (err) { res.sendStatus(500); throw err; }
    });

}


exports.deleteLibrary = function (req, res) {
    res.send(req.user);
}

exports.updateLibrary = function (req, res) {
    res.send(req.user);
}

exports.searchGlyphs = function (req, res) {
    res.send(req.user);
}

exports.getLibrary = function (req, res) {
    res.send(req.user);
}

exports.searchLibraries = function (req, res) {
    res.send(req.user);
}


exports.searchUsers = function (req, res) {
    res.send(req.user);
}

exports.getUserContent = function (req, res) {
    res.send(req.user);
}


