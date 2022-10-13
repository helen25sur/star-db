export default class SwapiService {

  #apiBaseUrl = 'https://swapi.dev/api';

  async getResource(url) {
    const res = await fetch(`${this.#apiBaseUrl}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url} \n received ${res.status}`)
    }

    return await res.json();
  }

  // people

  async getAllPeople() {
    const res = await this.getResource(`/people/`);
    return res.results;
  }

  getPerson(id) {
    return this.getResource(`/people/${id}`);
  }

  // planets

  async getAllPlanets() {
    const res = await this.getResource(`/planets/`);
    return res.results;
  }

  getPlanet(id) {
    return this.getResource(`/planets/${id}`);
  }

  // Starships

  async getAllStarships() {
    const res = await this.getResource(`/starships/`);
    return res.results;
  }

  getStarship(id) {
    return this.getResource(`/starships/${id}`);
  }
}