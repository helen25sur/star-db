import ItemList from '../item-list';
import withData from '../helper/hoc/with-data';

import { SwapiServiceConsumer } from '../swapi-service-context';

const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    )
  }
};

const renderNameBithYear = ({ name, birthYear }) => <span>{name} ({birthYear})</span>;
const renderModelName = ({ name, model }) => <span>{name} ({model})</span>;
const renderNameDiameter = ({ name, diameter }) => <span>{name} ({diameter})</span>;

const PersonList = () => {
  return (
    <SwapiServiceConsumer>
      {({ getAllPeople }) => {
        const El = withData(withChildFunction(ItemList, renderNameBithYear), getAllPeople);
        return (
          <El />
        )
      }}
    </SwapiServiceConsumer>
  )
}

const PlanetList = () => {
  return (
    <SwapiServiceConsumer>
      {({ getAllPlanets }) => {
        const El = withData(withChildFunction(ItemList, renderNameDiameter), getAllPlanets);
        return (
          <El />
        )
      }}
    </SwapiServiceConsumer>
  )
}

const StarshipList = () => {
  return (
    <SwapiServiceConsumer>
      {({ getAllStarships }) => {
        const El = withData(withChildFunction(ItemList, renderModelName), getAllStarships);
        return (
          <El />
        )
      }}
    </SwapiServiceConsumer>
  )
}


// const PlanetList = withData(
//   withChildFunction(ItemList, renderNameDiameter),
//   getAllPlanets);
// const StarshipList = withData(
//   withChildFunction(ItemList, renderModelName),
//   getAllStarships);

export {
  PersonList,
  PlanetList,
  StarshipList
}