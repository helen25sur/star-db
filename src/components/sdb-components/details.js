import ItemDetail, { Record } from '../item-details';

import { SwapiServiceConsumer } from '../swapi-service-context';
const PersonDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {
        (swapiService) => {
          const { getPerson, getPersonImage } = swapiService;
          return (
            <ItemDetail
              getData={getPerson}
              getImageUrl={getPersonImage}
              itemId={itemId} >
              <Record field="gender" label="Gender" />
              <Record field="birthYear" label="Birth year" />
              <Record field="eyeColor" label="Eye color" />
            </ItemDetail>
          )
        }
      }
    </SwapiServiceConsumer>
  );
};

const PlanetDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {
        ({ getPlanet, getPlanetImage }) => {
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
      }
    </SwapiServiceConsumer>
  )
};

const StarshipDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {
        ({ getStarship, getStarshipImage }) => {
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
      }
    </SwapiServiceConsumer>
  )
};

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
}