
import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import newVisiting from "../models/newVisiting.js";



// ➕ create new visiting  /visitlist/add
export const createNewVisiting = catchAsyncErrors(async (req, res, next) => {
    // Step 1: 
    const { cityName, countryName, flag, date, position, notes } = req.body;
    const userId = req.user.id;
    console.log("Adding to Watchlist:", { cityName, countryName, flag, date, position, notes });

    // Step 2: create new visiting
    const createVisiting = await newVisiting.create({
        user: userId,
        cityName,
        countryName,
        flag,
        date,
        notes,
        position,
    });

    if (!position || !position.lat || !position.lng) {
        return res.status(400).json({ success: false, message: "Position coordinates are required" });
    }

    // Step 3. 
    res.status(201).json({
        success: true,
        message: "Created new visiting successfully!",
        createVisiting,
    });
});


// Get user's visitiList - optimized version /visitlist/me
export const getVisitiList = catchAsyncErrors(async (req, res, next) => {
    const userId = req.user._id;

    // Base query - now actually used in the find()
    const query = { user: userId };

    const userVisitList = await newVisiting.find(query) // Now using the query object
        .sort({ date: -1 }); // Newest first

    res.status(200).json({
        success: true,
        count: userVisitList.length,
        userVisitList
    });
});


// ❌ Remove visit
export const removeFromVisitList = catchAsyncErrors(async (req, res, next) => {
    const userId = req.user._id;
    const visitId = req.params.id;

    /* console.log("Removing from Watchlist:", { cityName, countryName }); */

    const deletedVisit = await newVisiting.findOneAndDelete({
        _id: visitId,
        user: userId
    });

    if (!deletedVisit) {
        return next(new ErrorHandler("Visit not found or unauthorized to delete", 404));
    };

    res.status(200).json({
        success: true,
        message: `Visit "${deletedVisit.cityName}" successfully deleted.`,
    });

});