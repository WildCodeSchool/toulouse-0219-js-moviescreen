import React from 'react';
import { Button } from 'reactstrap';

export default class Footer extends React.Component {
  render() {
    return (
        <footer className="fond-foot">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-4 mt-4">
                        <p>Catégories</p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 mt-4">
                        <Button color="secondary">Contact us</Button>{' '}
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 mt-4">
                    <i class="fab fa-facebook fa-2x"></i> <i class="fab fa-instagram fa-2x"></i> <i class="fab fa-twitter fa-2x"></i>
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
  


