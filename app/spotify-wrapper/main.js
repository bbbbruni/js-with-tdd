const search = (query, type) => {
  fetch(`https://api.spotify.com/v1/search?q=${query}&type=${type}`)
    .then(res => res.json())
}

const searchArtists = (query) => {
  search(query, 'artist');
};

const searchAlbums = (query) => {
  search(query, 'album');
};

const searchTracks = (query) => {
  search(query, 'tracks');
};

const searchPlaylists = (query) => {
  search(query, 'playlist');
};

export { search, searchArtists, searchAlbums, searchTracks, searchPlaylists };