const mongoose = require("mongoose");

//create author schema
 const PublicationSchema = mongoose.Schema(
   {
     id: Number,
     name: String,
     books: [String]
   }
 );

 const PublicationNodel = mongoose.model("publications",PublicationSchema);

 module.exports = PublicationNodel;