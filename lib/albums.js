"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = album;
function album() {
  var _this = this;

  return {
    getAlbum: function getAlbum(id) {
      return _this.request(_this.apiURL + "/albums/" + id + "?market=ES");
    },
    getAlbums: function getAlbums(ids) {
      return _this.request(_this.apiURL + "/albums?ids=" + ids + "&market=ES");
    },
    getTracks: function getTracks(id) {
      return _this.request(_this.apiURL + "/albums/" + id + "/tracks?market=ES&limit=10&offset=5");
    }
  };
}