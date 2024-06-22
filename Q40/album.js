function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("Arshad", "Album title 1", 10);
var album2 = make_album("Asif", "Album title 2", 10);
var album3 = make_album("Arif", "Album title 3", 10);
console.log(album1);
console.log(album2);
console.log(album3);
