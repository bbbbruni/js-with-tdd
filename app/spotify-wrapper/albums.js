import { API_URL, TOKEN_API } from './config';
import toJSON from './utils';

const getAlbum = id => {
  fetch(`${API_URL}/albums/${id}?market=ES`, TOKEN_API).then(toJSON)
};

const getAlbums = id => {
  fetch(`${API_URL}/albums?ids=${id}&market=ES`, TOKEN_API).then(toJSON)
};

const getAlbumTracks = id => {
  fetch(`${API_URL}/albums/${id}/tracks?market=ES&limit=10&offset=5`, TOKEN_API).then(toJSON)
};


export { getAlbum, getAlbums, getAlbumTracks }