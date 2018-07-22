import chai, { expect } from 'chai';
import SpotifyWrapper from '../index';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

chai.use(sinonChai);
sinonStubPromise(sinon);
global.fetch = require('node-fetch');

describe('SpotifyWrapper library', () => {
  it('should create an instance of SpotifyWrapper', () => {
    let spotify = new SpotifyWrapper({});
    expect(spotify).to.be.an.instanceof(SpotifyWrapper);
  });

  it('should receive apiURL as an option', () => {
    let spotify = new SpotifyWrapper({
      apiURL: '0102020'
    });

    expect(spotify.apiURL).to.be.equal('0102020');
  });

  it('should use the default API_URL if is not provided', () => {
    let spotify = new SpotifyWrapper({});
    expect(spotify.apiURL).to.be.equal('https://api.spotify.com/v1');
  });

  it('should receive token as an option', () => {
    let spotify = new SpotifyWrapper({
      token: '0101'
    });
    expect(spotify.token).to.be.equal('0101');
  });

  describe('method request', () => {
    let fetchedStub;
    let promise;

    beforeEach(() => {
      fetchedStub = sinon.stub(global, 'fetch');
      promise = fetchedStub.returnsPromise();
    });

    afterEach(() => {
      fetchedStub.restore();
    });

    it('should return request method', () => {
      let spotify = new SpotifyWrapper({});
      expect(spotify.request).to.exist
    });

    it('should call fetch when requested', () => {
      let spotify = new SpotifyWrapper({});

      spotify.request();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with correct url passed', () => {
      let spotify = new SpotifyWrapper({});

      spotify.request('url');
      expect(fetchedStub).to.have.been.calledWith('url');
    });

    it('should call fetch with correct headers', () => {
      let spotify = new SpotifyWrapper({
        token: 'foo'
      });

      const headers = {
        headers: {
          Authorization: `Bearer foo`
        }
      }

      spotify.request('url');
      expect(fetchedStub).to.have.been.calledWith('url', headers);
    });
  });
});