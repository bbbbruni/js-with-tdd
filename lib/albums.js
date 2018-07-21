'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlbumTracks = exports.getAlbums = exports.getAlbum = undefined;

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getAlbum = function getAlbum(id) {
  fetch(_config2.default + '/albums/' + id + '?market=ES').then(_utils2.default);
};

var getAlbums = function getAlbums(id) {
  fetch(_config2.default + '/albums?ids=' + id + '&market=ES').then(_utils2.default);
};

var getAlbumTracks = function getAlbumTracks(id) {
  fetch(_config2.default + '/albums/' + id + '/tracks?market=ES&limit=10&offset=5').then(_utils2.default);
};

exports.getAlbum = getAlbum;
exports.getAlbums = getAlbums;
exports.getAlbumTracks = getAlbumTracks;