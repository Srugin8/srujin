import React from 'react';
import {Link} from "react-router-dom";



let View = () => {
    return(
        <React.Fragment>
          <section>
              <div className="container mt-3">
                  <div className="row">
                      <div className="container">
                          <h4>View Details</h4>
                      </div>
                  </div>
              </div>
          </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <ul>
                                    <li>
                                        name:Srugin
                                    </li>
                                    <li>Email:Srugin8@gmail.com</li>
                                    <li>phone:8179601623</li>
                                    <li>College:Aditya Engineering College</li>
                                    <li>EEE</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col p-5 ml-5">
                        <Link to='/Professor' className='btn btn-success btn-sm'>Back</Link>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};
export default View;