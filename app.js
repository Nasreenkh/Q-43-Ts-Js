"use strict";
// Define an array of magician's names
const magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
// Function to add "the Great" to each magician's name
function make_great(magicians) {
    const greatMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push("the Great " + magicians[i]);
    }
    return greatMagicians;
}
// Function to show magicians
function show_magicians(magicians) {
    console.log("List of Magicians:");
    magicians.forEach(magician => {
        console.log(magician);
    });
}
// Call the make_great function with a copy of the original array
const greatMagiciansArray = make_great([...magicians]);
// Call the show_magicians function with the original array
console.log("Original Magicians:");
show_magicians(magicians);
// Call the show_magicians function with the array containing "the Great" added
console.log("Great Magicians:");
show_magicians(greatMagiciansArray);
