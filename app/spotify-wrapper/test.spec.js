import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import { search, searchArtists, searchAlbums, searchTracks, searchPlaylists } from './main'

chai.use(sinonChai);
sinonStubPromise(sinon);
global.fetch = require('node-fetch');

describe('Spotify Wrapper', () => {

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
    let fetchedStub;

    // Hooks
    beforeEach(() => {
      fetchedStub = sinon.stub(global, 'fetch');
    });

    afterEach(() => {
      // Restores the XHR constructor(fetchedStub) to use on another test block
      fetchedStub.restore();
    });

    it('should call fetch function', () => {
      const artists = search();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    describe('Passing on type', () => {
      it('should receive correct url to fetch spotify API', () => {
        const artists = search('drake', 'artist');
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=drake&type=artist');

        const albums = search('drake', 'album');
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=drake&type=album');
      });
    });

    describe('Passing two or more types', () => {
      it('should receive correct url to fetch spotify API', () => {
        const artistAndAlbums = search('drake', ['album', 'artist']);
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=drake&type=album,artist');
      });
    });
  });
});