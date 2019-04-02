import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class Footer extends React.Component {
  render() {
    return (
        <footer className="fond-foot">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <p>Catégories</p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <p>Contact Us</p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <p>Réseaux sociaux</p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <p>Crédit</p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <p>Conseil de la semaine</p>
                    </div>
                </div>
            </div>
        </footer>
    );
    }
}
  


