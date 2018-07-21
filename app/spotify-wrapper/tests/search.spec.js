import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { search, searchArtists, searchAlbums, searchTracks, searchPlaylists } from '../search'

chai.use(sinonChai);
global.fetch = require('node-fetch');

describe('Search', () => {
  let fetchedStub;
  let promise;

  // Hooks
  beforeEach(() => {
    // Use and handle fetch to work with node-fetch
    fetchedStub = sinon.stub(global, 'fetch');
    // Sinon handle promises return
    promise = fetchedStub.returnsPromise();
  });

  afterEach(() => {
    // Restores the XHR constructor(fetchedStub) to use on another test block
    fetchedStub.restore();
  });

  describe('Smoke tests', () => {
    it('should exist search method', () => {
      expect(search).to.exist;
    });

    it('should exist searchArtists method', () => {
      expect(searchArtists).to.exist;
    });


    it('should exist searchAlbums method', () => {
      expect(searchAlbums).to.exist;
    });

    it('should exist searchTracks method', () => {
      expect(searchTracks).to.exist;
    });

    it('should exist searchPlaylists method', () => {
      expect(searchPlaylists).to.exist;
    });
  });

  describe('Generic Search', () => {
    it('should call fetch function', () => {
      const artists = search();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should receive correct url to fetch spotify API', () => {
      describe('passing on type', () => {
        const artists = search('drake', 'artist');
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=drake&type=artist');

        const albums = search('drake', 'album');
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=drake&type=album');
      });

      describe('passing two or more types', () => {
        const artistAndAlbums = search('drake', ['artist', 'album']);
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=drake&type=artist,album');
      });
    });

    // TODO: Refator this code with the update of the teacher => https://bit.ly/2LAMZcX
    it.skip('should return JSON data from the promise', () => {
      promise.resolves({ body: 'json' });
      const artist = search('paramore', 'album');

      expect(artist.resolveValue).to.be.eql({body: 'json'});
    });

  });

  describe('Search Artist', () => {
    it('should call fetch function', () => {
      const artist = searchArtists('drake');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should fetch ARTIST with correct URL from Spotify API', () => {
      const artist = searchArtists('drake');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=drake&type=artist');
    });
  });

  describe('Search Albums', () => {
    it('should call fetch function', () => {
      const album = searchAlbums('paramore');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should fetch ALBUM with correct URL from Spotify API', () => {
      const album = searchAlbums('paramore');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=paramore&type=album');
    });
  });

  describe('Search Tracks', () => {
    it('should call fetch function', () => {
      const tracks = searchTracks('blink-182');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should fetch TRACKS with correct URL from Spotify API', () => {
      const tracks = searchTracks('blink-182');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=blink-182&type=tracks');
    });
  });

  describe('Search Playlist', () => {
    it('should call fetch function', () => {
      const playlists = searchPlaylists('lorde');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should fetch PLAYLISTS with correct URL from Spotify API', () => {
      const playlists = searchPlaylists('lorde');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=lorde&type=playlist');
    });
  });
});