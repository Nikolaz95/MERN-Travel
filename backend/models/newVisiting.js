import mongoose from "mongoose";



const newVisitingShema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },

        cityName: {
            type: String,
            required: [true, "Please enter your name"],
            maxLength: [50, "Your name cannot exceed 50 characters"],
        },

        countryName: {
            type: String,
            required: [true, "Please enter name of country name !"],
        },

        flag: {
            type: String,
        },

        date: {
            type: Date,
            default: Date.now
        },

        position: {
            lat: {
                type: Number,
                required: [true, "Latitude is required"],
            },
            lng: {
                type: Number,
                required: [true, "Longitude is required"],
            },
        },

        notes: {
            type: String,
            required: [false],
            maxLength: [200, "Your notes cannot exceed 200 characters"],
        },

    },

    { timestamps: true }
)


export default mongoose.model("NewVisiting", newVisitingShema);