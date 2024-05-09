//Album: Write a function called make_album () that builds an Object describing a music album. 
//The function should take in an artist name and an album title, and it should return an Object 
//containing these two pieces of information. 
//Use the function to make three dictionaries representing different albums. 
//Print each return value to show that Objects are storing the album information correctly. 
//Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
//If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
//Make at least one new function call that includes the number of tracks on an album.
function make_album(artistName, albumTitle) {
    return { artistName, albumTitle };
}
let album1 = make_album("Ahmed Jahanzeb", "Parastish");
let album2 = make_album("Atif Aslam", "Doorie");
let album3 = make_album("Farhan Saeed", "Aadat");
console.log(album1);
console.log(album2);
console.log(album3);
//Number of tracks
function make_album2(artistName, albumTitle, numberOfTracks) {
    return `${artistName}, ${albumTitle}, ${numberOfTracks}`;
}
let album4 = make_album2("Ali", "Dil Hai", 20);
let album5 = make_album2("Madad", "Ajeeb Kahani", 10);
let album6 = make_album("Ayaz", "Mausam-e-Dil", 15);
console.log(album4);
console.log(album5);
console.log(album6);
export {};
