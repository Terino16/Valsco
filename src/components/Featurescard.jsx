import PropTypes from 'prop-types';

const Featurescard = ({ title, description }) => {
  return (
    <div className='md:hover:px-4 bg-zinc-900 rounded-lg md:h-[300px] h-auto'>
    <div className="max-w-sm bg-black rounded-lg on md:hover:bg-zinc-800 md:h-[350px] md:w-[300px] h-auto w-[150px]">
      <a href="#">
        <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
      </a>
      <div className="md:p-5 p-1">
        <a href="#">
          <h5 className="mb-2 md:text-2xl  text-xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm md:text-base">{description}</p>
      </div>
    </div>
  </div>
  

  );
};

Featurescard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Featurescard;
