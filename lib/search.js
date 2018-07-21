'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchPlaylists = exports.searchTracks = exports.searchAlbums = exports.searchArtists = exports.search = undefined;

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var search = function search(query, type) {
  fetch(_config2.default + '/search?q=' + query + '&type=' + type).then(_utils2.default);
};

var searchArtists = function searchArtists(query) {
  search(query, 'artist');
};

var searchAlbums = function searchAlbums(query) {
  search(query, 'album');
};

var searchTracks = function searchTracks(query) {
  search(query, 'tracks');
};

var searchPlaylists = function searchPlaylists(query) {
  search(query, 'playlist');
};

exports.search = search;
exports.searchArtists = searchArtists;
exports.searchAlbums = searchAlbums;
exports.searchTracks = searchTracks;
exports.searchPlaylists = searchPlaylists;