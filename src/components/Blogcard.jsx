import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Blogcard = ({title,material,id}) => {
  return (
<div className="max-w-sm p-6 rounded-lg bg-zinc-900 md:w-[40vh] md:h-[28rem] lg:w-[50vh] lg:h-[25rem] flex flex-col items-start">
    <a href="#">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{title.substring(0,50)}  </h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{material.substring(0,300)}...</p>
    <Link to={`../BlogPage/${id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800">
  Read more
  <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
</Link>
    </div>
  )
}
Blogcard.propTypes = {
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    material: PropTypes.string.isRequired,
    id:PropTypes.string.isRequired
  };
  

export default Blogcard