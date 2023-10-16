import React from 'react';
import {Link} from "react-router-dom";


function Home(){
    return(
        <React.Fragment>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At distinctio et facere laboriosam molestiae reiciendis. Accusamus adipisci architecto autem commodi debitis delectus deserunt dolorum ducimus et excepturi id iste nemo neque nisi nulla officiis provident sapiente tempora tenetur veritatis, voluptate?</p>
         <h3>Student Details</h3>
            <Link to={'/Add'} className='btn btn-success btn-sm'>Add</Link>
        </React.Fragment>
    )
}
export default Home;
