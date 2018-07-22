import album from './albums';
import search from './search';
import { API_URL } from './config';

export default class SpotifyWrapper {
  constructor(options) {
    this.apiURL = options.apiURL || API_URL,
    this.token = options.token,
    this.album = album.bind(this)(),
    this.search = search.bind(this)()
  }

  request(url) {
    const headers = {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    }

    return fetch(url, headers)
  }
}