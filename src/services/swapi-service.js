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
    return res.results.map(el => this.#transformPerson(el));
  }

  async getPerson(id) {
    const person = await this.getResource(`/people/${id}`);
    return this.#transformPerson(person)
  }

  // planets

  async getAllPlanets() {
    const res = await this.getResource(`/planets/`);
    return res.results.map(el => this.#transformPlanet(el));
  }

  async getPlanet(id) {
    const planet = await this.getResource(`/planets/${id}`);
    return this.#transformPlanet(planet);
  }

  // Starships

  async getAllStarships() {
    const res = await this.getResource(`/starships/`);
    return res.results.map(el => this.#transformStarship(el));
  }

  async getStarship(id) {
    const starship = await this.getResource(`/starships/${id}`);
    return this.#transformStarship(starship)
  }

  #extractID = (item) => {
    const regexp = /\/([0-9]+)/;
    return item.url.match(regexp)[1];

  }

  #transformPlanet = (planet) => {
    return {
      id: this.#extractID(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    }
  }

  #transformStarship = (starship) => {
    return {
      id: this.#extractID(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity
    }
  }

  #transformPerson = (person) => {
    return {
      id: this.#extractID(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eyeColor
    }
  }
}