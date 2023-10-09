import {Box, Calendar, CreditCard, Home, ShoppingBag, Users} from 'react-feather'
import './navbar.css'
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__content">
                <img src="" alt="logo"/>
                <a className="navbar__links" href="#"><Box/></a>
                <a className="navbar__links" href="#"><Home/></a>
                <a className="navbar__links" href="#"><Calendar/></a>
                <a className="navbar__links" href="#"><Box/></a>
                <a className="navbar__links" href="#"><Users/></a>
                <a className="navbar__links" href="#"><ShoppingBag/></a>
                <a className="navbar__links" href="#"><CreditCard/></a>
                <a className="navbar__links" href="#"><Box/></a>
            </div>
        </nav>
    );
};
export default Navbar;
