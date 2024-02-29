import mongoose from "mongoose";

const problemSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        closeDate: {
            type: Date,
            required: true,
        },
        reward: {
            type: Number,
            default: 0,
            min: 0,
        },
        subject: {
            type: String,
            required: true,
        },
        isGov: {
            type: Boolean,
            required: true,
            default: false,
        },
        shortDescription: {
            type: String,
            required: true,
        },
        thumbnail: {
            type: String,
            default: '../images/pnb.png',
        },
        detailedDescription: {
            type: String,
            required: true,
        },
        solutions: {
            type: [String], //To store solutionIDs
        }
    },
    {
        timestamps: true,
    }
);

export const Problem = mongoose.model('Problem', problemSchema);