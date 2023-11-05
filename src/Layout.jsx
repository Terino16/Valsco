import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PropTypes from 'prop-types';

const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  };

export default Layout;