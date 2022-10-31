import ItemList from '../item-list';
import withData from '../helper/hoc/with-data';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();
const { getAllPeople, getAllPlanets, getAllStarships } = swapiService;

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

const PersonList = withData(
  withChildFunction(ItemList, renderNameBithYear),
  getAllPeople);
const PlanetList = withData(
  withChildFunction(ItemList, renderNameDiameter),
  getAllPlanets);
const StarshipList = withData(
  withChildFunction(ItemList, renderModelName),
  getAllStarships);

export {
  PersonList,
  PlanetList,
  StarshipList
}