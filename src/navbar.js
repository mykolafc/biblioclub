const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>BiblioClub</h1>
            <div className="links">
                <a href="/membres">Centre des Membres</a>
                <a href="/">Livre du Mois</a>
                <a href="/">Réunions</a>
            </div>
        </nav>
    );
}
 
export default Navbar;