const search = (query, type) =>
  fetch(`https://api.spotify.com/v1/search?q=${query}&type=${type}`);

const searchArtists = () => {};
const searchAlbums = () => {};
const searchTracks = () => {};
const searchPlaylists = () => {};

export { search, searchArtists, searchAlbums, searchTracks, searchPlaylists };