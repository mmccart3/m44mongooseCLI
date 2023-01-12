const yargs = require('yargs');
const mongoose = require('mongoose');
const {createMovie} = require ('./movies/function');
require('./db/connection');
async function app (yargsInput) {
    if (yargsInput.create) {
        // code to add a movie goes here
        const movieObject = {title: yargsInput.title, actor: yargsInput.actor, director: yargsInput.director};
        await createMovie(movieObject);
    } else if (yargsInput.read) {
        //code to list all movies goes here
    } else if (yargsInput.updateActor) {
        //code to update actor goes here
    } else if (yargsInput.updateDirector) {
        //code to update director goes here
    } else if (yargsInput.delete) {
        //code to delete a movie goes here
    } else {
        console.log("Command not recognised")
    };
    await mongoose.disconnect();
};
app(yargs.argv);