import PropTypes from 'prop-types';
const Foundercard = ({name,position,founderimg}) => {
  return (
   
        <div className="w-[250px] md:w-[300px] lg:w-[350px]  mb-6 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center pb-10">
              <img
                className="w-32 h-32 m-3 rounded-full shadow-lg"
                src={founderimg}
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {name}
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
               {position}
              </span>
            </div>
        
    </div>
  )
}

Foundercard.propTypes = {
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    founderimg: PropTypes.string, // You can adjust the type if it's not a string
  };

export default Foundercard