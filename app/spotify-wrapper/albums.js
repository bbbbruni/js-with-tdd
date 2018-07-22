export default function album() {
  return {
    getAlbum: id => this.request(`${this.apiURL}/albums/${id}?market=ES`),
    getAlbums: ids => this.request(`${this.apiURL}/albums?ids=${ids}&market=ES`),
    getTracks: id => this.request(`${this.apiURL}/albums/${id}/tracks?market=ES&limit=10&offset=5`),
  }
}