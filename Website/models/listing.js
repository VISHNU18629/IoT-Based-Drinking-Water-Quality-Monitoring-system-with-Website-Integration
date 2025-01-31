const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");


const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    }, 
    description: String,
    image: {
        filename: String,
        url: String,
      },
    ph: String,
    temperature: String,
    tds: String,
    ec: String,
    location: String,
    country: String,
    reviews:[
      {
        type: Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
    
  });

                 

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
