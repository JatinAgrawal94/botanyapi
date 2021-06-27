const mongoose=require('mongoose');

const botanySchema = new mongoose.Schema({
    Name: String,
    alternateName: String,
    sowInstructions: String,
    spaceInstructions: String,
    harvestInstructions: String,
    compatiblePlants: String,
    avoidInstructions: String,
    culinaryHints: String,
    culinaryPreservation: String
});

const Encyclopedia = mongoose.model('encyclopedia', botanySchema);

module.exports=Encyclopedia;