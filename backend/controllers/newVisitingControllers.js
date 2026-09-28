
import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import newVisiting from "../models/newVisiting.js";


// ➕ create new visiting  /visitlist/add
export const createNewVisiting = catchAsyncErrors(async (req, res, next) => {
    // Step 1: 
    const { cityName, countryName, flag, date, position, notes, continent } = req.body;
    const userId = req.user.id;
    console.log("Adding to Watchlist:", { cityName, countryName, continent, flag, date, position, notes });

    // Step 2: create new visiting
    const createVisiting = await newVisiting.create({
        user: userId,
        cityName,
        countryName,
        continent,
        flag,
        date,
        notes,
        position,
    });

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


// 📝 Update visit notes /visitlist/update/:id
export const updateVisitNotes = catchAsyncErrors(async (req, res, next) => {
    const userId = req.user._id;
    const visitId = req.params.id;
    const { notes } = req.body; // Preuzimamo samo 'notes' iz tela zahteva

    if (typeof notes !== 'string') {
        return res.status(400).json({ success: false, message: "Notes field must be a string." });
    }

    // Pronađi i ažuriraj dokument. Koristimo { new: true } da dobijemo ažurirani dokument.
    const updatedVisit = await newVisiting.findOneAndUpdate(
        {
            _id: visitId,
            user: userId
        },
        { notes: notes },
        {
            new: true,
            runValidators: true,
        }
    );

    // Provera da li je poseta pronađena/ažurirana
    if (!updatedVisit) {
        // Ako poseta nije pronađena ili korisnik nije vlasnik
        return next(new ErrorHandler("Visit not found or unauthorized to update", 404));
    }

    res.status(200).json({
        success: true,
        message: `Notes for "${updatedVisit.cityName}" successfully updated.`,
        updatedVisit,
    });
});