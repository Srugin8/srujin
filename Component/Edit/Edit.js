import React from 'react';
import {Link} from "react-router-dom";


let Edit = () => {
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <form>
                            <div className="card mt-3">
                                <div className="card-head">
                                    <div className="h3 ml-5 text-primary">
                                        Edit Details
                                    </div>
                                    <div className="card-body ml-4">
                                        <div>
                                            <input type="text"  className='my-1' placeholder='name'/>
                                        </div>
                                        <div>
                                            <input type="text" className='my-1' placeholder='email'/>

                                        </div>
                                        <div>
                                            <input type="text"  className='my-1'placeholder='number'/>
                                        </div>
                                        <div>
                                            <input type="text"  className='my-1 'placeholder='college'/>
                                        </div>
                                        <div>
                                            <input type="text"  className='my-1 'placeholder='branch'/>
                                        </div>
                                        <Link className='btn btn-amber btn-sm'>Update</Link>
                                        <Link to={'/Home'} className='btn btn-dark-green btn-sm'>Cancel</Link>


                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default Edit;