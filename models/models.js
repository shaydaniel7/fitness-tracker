// Create the required custom methods at the bottom of this file

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        trim: true,
        default: Date.now()
    },

    exercises: [{
        type: {
            type: String,
            trim: true,
            required: true,
        },
        name: {
            type: String,
            trim: true,
            required: true,

        },

        duration: {
            type: Number,
            trim: true,

        },

        reps: {
            type: Number,
            trim: true,

        },

        sets: {
            type: Number,
            trim: true,

        },

        weight: {
            type: Number,
            trim: true,

        },

        distance: {
            type: Number,
            trim: true,

        }
    }
    ]

});
    // setFullName: sets the current user's `fullName` property to their lastName appended to their `firstName`
    // workoutSchema.virtual = ("totalDuration").get(function() {
    //     reutrn this.exercise.reduce((total, exercise)=> {
    //         return total + exercise.duration;
    //     }, 0)
        // return this.fullName;
    // })
    
// This creates our model from the above schema, using mongoose's model method
const Workout = mongoose.model("Workout", workoutSchema);

// Export the User model
module.exports = Workout;
