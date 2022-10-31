import ItemDetail, { Record } from '../item-details';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();
const { getPerson, getPersonImage,
  getPlanet, getPlanetImage,
  getStarship, getStarshipImage } = swapiService;

const PersonDetails = ({ itemId }) => {
  return (
    <ItemDetail
      getData={getPerson}
      getImageUrl={getPersonImage}
      itemId={itemId} >
      <Record field="gender" label="Gender" />
      <Record field="birthYear" label="Birth year" />
      <Record field="eyeColor" label="Eye color" />
    </ItemDetail>
  );
};

const PlanetDetails = ({ itemId }) => {
  return (
    <ItemDetail
      getData={getPlanet}
      getImageUrl={getPlanetImage}
      itemId={itemId} >
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation Period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetail>
  )
}
const StarshipDetails = ({ itemId }) => {
  return (
    <ItemDetail
      getData={getStarship}
      getImageUrl={getStarshipImage}
      itemId={itemId}>
      <Record field="model" label="Model" />
      <Record field="costInCredits" label="Cost" />
      <Record field="length" label="Length" />
    </ItemDetail>
  )
}

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
}