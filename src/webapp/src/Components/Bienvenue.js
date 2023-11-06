import React from 'react';
import {Card, Col, Container, Row} from 'react-bootstrap';
class Bienvenue extends React.Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Card className="bg-dark text-white">
                            <h1>Bienvenue au Magasin des Voitures</h1>
                            <blockquote className="blockquote mb-0"> <p>Le meilleur de nos voitures est exposé près de chez vous</p> <footer className="blockquote-footer">IDSIT
                        </footer></blockquote>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Bienvenue;





