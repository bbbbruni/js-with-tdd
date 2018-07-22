import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import SpotifyWrapper from '../index';

chai.use(sinonChai);
sinonStubPromise(sinon);
global.fetch = require('node-fetch');
sinonStubPromise(sinon);

describe('Search', () => {
  let spotify;
  let fetchedStub;
  let promise;

  // Hooks
  beforeEach(() => {
    spotify = new SpotifyWrapper({
      token: 'foo'
    });

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
    it('should exist searchArtists method', () => {
      expect(spotify.search.artists).to.exist;
    });


    it('should exist searchAlbums method', () => {
      expect(spotify.search.albums).to.exist;
    });

    it('should exist searchTracks method', () => {
      expect(spotify.search.tracks).to.exist;
    });

    it('should exist searchPlaylists method', () => {
      expect(spotify.search.playlists).to.exist;
    });
  });

  describe('Search Artist', () => {
    it('should call fetch function', () => {
      const artist = spotify.search.artists('drake');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should fetch ARTIST with correct URL from Spotify API', () => {
      const artist = spotify.search.artists('drake');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=drake&type=artist');
    });
  });

  describe('Search Albums', () => {
    it('should call fetch function', () => {
      const album = spotify.search.artists('paramore');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should fetch ALBUM with correct URL from Spotify API', () => {
      const album = spotify.search.albums('paramore');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=paramore&type=album');
    });
  });

  describe('Search Tracks', () => {
    it('should call fetch function', () => {
      const tracks = spotify.search.tracks('blink-182');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should fetch TRACKS with correct URL from Spotify API', () => {
      const tracks = spotify.search.tracks('blink-182');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=blink-182&type=tracks');
    });
  });

  describe('Search Playlist', () => {
    it('should call fetch function', () => {
      const playlists = spotify.search.playlists('lorde');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should fetch PLAYLISTS with correct URL from Spotify API', () => {
      const playlists = spotify.search.playlists('lorde');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=lorde&type=playlist');
    });
  });
});