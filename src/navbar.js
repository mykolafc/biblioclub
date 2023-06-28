import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to='/'><h1>BiblioClub</h1></Link>
            <div className="links">
                <Link to="/membres">Centre des Membres</Link>
                <Link to="/livre-du-mois">Livre du Mois</Link>
                <Link to="/reunion">Réunions</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;