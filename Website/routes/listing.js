const express = require("express");
const router =express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const {listingSchema} = require("../schema.js");
const Listing = require("../models/listing.js");
const {isLoggedIn} = require("../middleware.js");
const { showListing } = require("../controllers/listings.js");

const validateListing = (req, res, next) => {
    let {error} = listingSchema.validate(req.body);
   
  
    if(error) {
      let errMsg = error.details.map((el) => el.message).join(",");
      throw new ExpressError(400, errMsg);
    } else {
      next();
    }
  }
const listingController = require("../controllers/listings.js");

router.route("/")
.get(wrapAsync(listingController.index))
.post(isLoggedIn, validateListing, wrapAsync(listingController.createListing));

  
 //New Route
 router.get("/new", isLoggedIn, listingController.renderNewForm); 
  

router.route("/:id")
.get( wrapAsync(listingController.showListing))
.put(isLoggedIn, wrapAsync(listingController.updateListing))
.delete(isLoggedIn, wrapAsync(listingController.destroyListing));
  


 
 
  
  //Edit Route
  router.get("/:id/edit", isLoggedIn, wrapAsync(listingController.renderEditForm));
 

  module.exports = router;