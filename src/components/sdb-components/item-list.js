import ItemList from '../item-list';
import withData from '../helper/hoc/with-data';
import withSwapiService from '../helper/hoc/with-swapi-service';

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

const PersonList = withSwapiService(
  withData(withChildFunction(ItemList, renderNameBithYear)),
  (swapiService) => {
    return {
      getData: swapiService.getAllPeople,
    }
});

const PlanetList = withSwapiService(
  withData(withChildFunction(ItemList, renderNameDiameter)), 
  (swapiService) => {
    return {
      getData: swapiService.getAllPlanets,
    }
  }
);

const StarshipList = withSwapiService(
  withData(withChildFunction(ItemList, renderModelName)), 
  (swapiService) => {
    return {
      getData: swapiService.getAllStarships,
    }
  });

export {
  PersonList,
  PlanetList,
  StarshipList
}