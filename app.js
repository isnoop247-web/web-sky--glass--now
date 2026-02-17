const fs = require('fs');
const path = require('path');

// Load playlists from playlists.json
const loadPlaylists = () => {
    const filePath = path.join(__dirname, 'playlists.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading playlists:', err);
            return;
        }
        const playlists = JSON.parse(data);
        displayPlaylists(playlists);
    });
};

// Display playlists in console
const displayPlaylists = (playlists) => {
    playlists.forEach((playlist) => {
        console.log(`Playlist Name: ${playlist.name}`);
        console.log(`Songs: ${playlist.songs.join(', ')}`);
        console.log('--------------');
    });
};

// Load playlists when the app runs
loadPlaylists();