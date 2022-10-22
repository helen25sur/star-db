import './container.css';

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

export default Container;