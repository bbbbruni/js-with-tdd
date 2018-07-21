import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { getAlbum, getAlbums, getAlbumTracks } from '../albums';

chai.use(sinonChai);
global.fetch = require('node-fetch');

describe('Album', () => {
  let fetchedStub;
  let promise;

  // Hooks
  beforeEach(() => {
    fetchedStub = sinon.stub(global, 'fetch');
    promise = fetchedStub.returnsPromise();
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('Smoke tests', () => {
    it('should return GetAlbum function', () => {
      expect(getAlbum).to.exist;
    });

    it('should return getAlbumTracks function', () => {
      expect(getAlbumTracks).to.exist;
    });
  });

  describe('getAlbum', () => {
    it('should call fetch', () => {
      const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should return ALBUM from correct URL Spotify API', () => {
      const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy?market=ES');
    });

    it.skip('should return JSON data from promise', () => {
      promise.resolves({ album: 'name' });
      const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');

      expect(album.resolveValue).to.be.eql({ album: 'name' });
    });
  });

  describe('getAlbums', () => {
    it('should call fetch', () => {
      const albums = getAlbums();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should return ALBUMS from correct URL Spotify API', () => {
      const albums = getAlbums(['382ObEPsp2rxGrnsizN5TX', '2noRn2Aes5aoNVsU6iWThc']);
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/albums?ids=382ObEPsp2rxGrnsizN5TX,2noRn2Aes5aoNVsU6iWThc&market=ES');
    });

    it.skip('should return JSON data from promise', () => {
      promise.resolves({ album: 'name' });
      const album = getAlbums(['382ObEPsp2rxGrnsizN5TX', '2noRn2Aes5aoNVsU6iWThc']);

      expect(album.resolveValue).to.be.eql({ album: 'name' });
    });
  });

  describe('getAlbumTracks', () => {
    it('should call fetch', () => {
      const albums = getAlbumTracks();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should return ALBUM TRACKS from correct URL Spotify API', () => {
      const albums = getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks?market=ES&limit=10&offset=5');
    });

    it.skip('should return JSON data from promise', () => {
      promise.resolves({ album: 'name' });
      const album = getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');

      expect(album.resolveValue).to.be.eql({ album: 'name' });
    });
  });
});