'use strict';

var _search = require('./search');

var _albums = require('./albums');

// entry file

module.exports = {
  search: _search.search,
  searchArtists: _search.searchArtists,
  searchAlbums: _search.searchAlbums,
  searchTracks: _search.searchTracks,
  searchPlaylists: _search.searchPlaylists,
  getAlbum: _albums.getAlbum,
  getAlbums: _albums.getAlbums,
  getAlbumTracks: _albums.getAlbumTracks
};