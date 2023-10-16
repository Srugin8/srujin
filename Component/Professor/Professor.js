import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {Contactservice} from "../../Service/Contactservice";


function Professor(){
    let [state,setstate] = useState({
        loading: false,
        contacts : [],
        errorMessage : ''
    });


    return(
        <React.Fragment>
            <div className="card mt-3">
                <table>
                    <thead>
                    <tr>
                        <th>name</th>
                        <th>email</th>
                        <th>phone</th>
                        <th>college</th>
                        <th>branch</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>srugin</td>
                        <td>srugin8@gmail.com</td>
                        <td>8179601623</td>
                        <td>Aditya engineering college</td>
                        <td>eee</td>
                        <Link to={'/View'} className='btn btn-primary btn-sm'>View
                        <i className='fa fa-eye'></i></Link>
                        <Link to={'/Edit'} className='btn btn-green btn-sm'>Edit
                        <i className='fa fa-pen'></i></Link>
                        <Link className='btn btn-red btn-sm'>Delete
                        <i className='fa fa-trash'></i></Link>
                    </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <td>srugin</td>
                        <td>srugin8@gmail.com</td>
                        <td>8179601623</td>
                        <td>Aditya engineering college</td>
                        <td>eee</td>
                        <Link to={'/View'} className='btn btn-primary btn-sm'>View
                            <i className='fa fa-eye'></i></Link>
                        <Link to={'/Edit'} className='btn btn-green btn-sm'>Edit
                            <i className='fa fa-pen'></i></Link>
                        <Link className='btn btn-red btn-sm'>Delete
                            <i className='fa fa-trash'></i></Link>
                    </tr>
                    </tbody>

                </table>
            </div>

        </React.Fragment>
    )
}

export default Professor;
