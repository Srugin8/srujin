import React from 'react';
import {Link} from 'react-router-dom';

let Nav = () => {
   return(
       <React.Fragment>
         <nav className='nav navbar-expand mt-5'>
             <div className="container mr-4">
             <div className=" middle mb-5">
                 <Link to={'/College'} className=" college nav-brand" >College</Link>
                 <Link to={'/Home'}>Student</Link>
                 <Link to={'/Professor'} className='ml-5'>Professor</Link>
             </div>

             </div>
         </nav>
       </React.Fragment>
   )
};
export default Nav;