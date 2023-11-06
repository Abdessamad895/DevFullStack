import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NavigationBar extends React.Component {
    render() {
        const customStyle = { color: 'white' }; // Définissez la couleur du texte en blanc
        return (
            <Navbar bg="dark" variant="dark">
                    <Link to={"list"} className="nav-link" style={customStyle}>
                        Liste Voiture
                    </Link>
                    <Link to={"add"} className="nav-link" style={customStyle}>
                        Ajouter Voiture
                    </Link>
            </Navbar>
        );
    }
}

export default NavigationBar;
