import API_URL from './config';
import toJSON from './utils';

const getAlbum = id => {
  fetch(`${API_URL}/albums/${id}?market=ES`).then(toJSON)
};

const getAlbums = id => {
  fetch(`${API_URL}/albums?ids=${id}&market=ES`).then(toJSON)
};

const getAlbumTracks = id => {
  fetch(`${API_URL}/albums/${id}/tracks?market=ES&limit=10&offset=5`).then(toJSON)
};


export { getAlbum, getAlbums, getAlbumTracks }