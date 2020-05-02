const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const workoutSchema = new Schema({
day: {type: Date},
exercises: [{
    type: {type: String}, 
    name: {type: String}, 
    duration: {type: Number}, 
    weight: {type: Number}, 
    sets: {type: Number}, 
    reps: {type: Number}, 
    distance: {type: Number}
}]
});
const workout = mongoose.model('Workout', workoutSchema)
module.exports = workout