import ItemDetail, { Record } from '../item-details';
import withSwapiService from '../helper/hoc/with-swapi-service';

const PersonDetails = (props) => {
  return (
    <ItemDetail {...props}>
      <Record field="gender" label="Gender" />
      <Record field="birthYear" label="Birth year" />
      <Record field="eyeColor" label="Eye color" />
    </ItemDetail>
  )
};

const PlanetDetails = (props) => {
  return (
    <ItemDetail {...props}>
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation Period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetail>
  )
};

const StarshipDetails = (props) => {
  return (
    <ItemDetail {...props}>
      <Record field="model" label="Model" />
      <Record field="costInCredits" label="Cost" />
      <Record field="length" label="Length" />
    </ItemDetail>
  )
};

const PersonDetailsWithContext =
  withSwapiService(PersonDetails, (swapiService) => {
    return {
      getData: swapiService.getPerson,
      getImageUrl: swapiService.getPersonImage
    }
  });
const PlanetDetailsWithContext = 
  withSwapiService(PlanetDetails, (swapiService) => {
    return {
      getData: swapiService.getPlanet,
      getImageUrl: swapiService.getPlanetImage
    }
  });
const StarshipDetailsWithContext = 
  withSwapiService(StarshipDetails, (swapiService) => {
    return {
      getData: swapiService.getStarship,
      getImageUrl: swapiService.getStarshipImage
    }
  });

export {
  PersonDetailsWithContext,
  PlanetDetailsWithContext,
  StarshipDetailsWithContext
}