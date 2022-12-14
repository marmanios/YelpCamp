const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const {isLoggedIn,validateCampground,isAuthor} = require("../middleware");
const campgrounds = require("../controllers/campgrounds");
const multer = require("multer");
const {cloudinary,storage} = require("../cloudinary/index");
const upload = multer({storage});

router.route("/")
     .get(catchAsync(campgrounds.index))
     .post(isLoggedIn,upload.array('image'),validateCampground, catchAsync(campgrounds.postCampground));

router.get('/new',isLoggedIn,campgrounds.renderNewForm )

router.route("/:id")
     .get(catchAsync(campgrounds.getCampground))
     .put(isLoggedIn,isAuthor, upload.array('image'),validateCampground, catchAsync(campgrounds.editCampground))
     .delete(isLoggedIn,isAuthor ,catchAsync(campgrounds.deleteCampground));

router.get('/:id/edit',isLoggedIn,isAuthor,catchAsync(campgrounds.renderEditCampground))

module.exports = router;