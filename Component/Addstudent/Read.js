import React from 'react';
import College_2 from '../images/College2.jpeg';
import College_1 from '../images/college.jpeg';
import {Link} from "react-router-dom";


function Read(){
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card mt-5">
                            <img src={College_1} alt=""/>

                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="container mt-5">
                            <div className="h4">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cupiditate ducimus ipsam nesciunt officia optio perspiciatis possimus quos reiciendis vero. Architecto commodi deleniti dicta, dolorem earum hic nemo, nobis obcaecati odio optio praesentium quasi ratione repellendus sit tempora tempore ullam vitae. Alias, aperiam at, commodi corporis deserunt dignissimos eaque error et exercitationem explicabo facere facilis fuga harum minima molestiae necessitatibus nihil nisi pariatur perferendis recusandae rem repellat sed sequi voluptates.</p>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="h4 ml-5">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At beatae delectus dignissimos error expedita fugiat id illum, laudantium nihil nulla porro quas quo, repellat repudiandae ullam veritatis voluptates? Assumenda eligendi in non perspiciatis repellat ut! A beatae consequuntur cumque deleniti ducimus, harum hic incidunt ipsa iusto magni molestias nemo, nostrum voluptatibus. Cumque deleniti eveniet maxime, molestiae molestias quos soluta tempore?`</p>
            </div>

        </React.Fragment>

    )
}


export default Read;