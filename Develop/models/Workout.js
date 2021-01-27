const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    type: String,
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number
})

const WorkoutSchema = new Schema({
    day: {
        type: String,
        required: "Day is Required"
    },

    excercise: [exerciseSchema],

});




const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;