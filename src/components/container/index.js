import './container.css';
import PropTypes from 'prop-types';

const Container = ({ first, second, third }) => {
  return (
    <div className='grid'>
      <div className='full-line'>
        {first}
      </div>
      <div className='left'>
        {second}
      </div>
      <div className='right'>
        {third}
      </div>
    </div>
  )
}

Container.propTypes = {
  first: PropTypes.node,
  second: PropTypes.node.isRequired,
  third: PropTypes.node.isRequired
}

export default Container;