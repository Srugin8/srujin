import React from 'react';
import College_1 from '../images/college.jpeg';
import College_2 from '../images/College2.jpeg';
import College_4 from '../images/college4.jpeg';
import {Link} from "react-router-dom";


function College(){
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
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dignissimos dolorem eum magnam molestiae natus, nostrum odit, pariatur quos, saepe ullam velit veniam voluptates. Atque beatae dolorem eius, esse exercitationem, harum necessitatibus nulla perspiciatis possimus qui, quibusdam quo sunt temporibus. Amet autem, deserunt dolor eius enim illo ipsa ipsam labore obcaecati quia reiciendis saepe vel velit, veritatis voluptas? At, neque.</p>
                              <Link to={'/Read'} className=' btn btn-red btn-sm'>Read More</Link>
                          </div>
                       </div>
                   </div>
               </div>
           </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card mt-5">
                            <img src={College_2} alt=""/>

                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="container mt-5">
                            <div className="h4">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dignissimos dolorem eum magnam molestiae natus, nostrum odit, pariatur quos, saepe ullam velit veniam voluptates. Atque beatae dolorem eius, esse exercitationem, harum necessitatibus nulla perspiciatis possimus qui, quibusdam quo sunt temporibus. Amet autem, deserunt dolor eius enim illo ipsa ipsam labore obcaecati quia reiciendis saepe vel velit, veritatis voluptas? At, neque.</p>
                                <Link to={'/Read'} className=' btn btn-green btn-sm'>Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className=" ne h4 ml-5 p-5 dark-grey-text">College</div>
                    </div>

                </div>
            <div className="row">
                <div className="col-md-4 ml-5">
                    <img src={College_4} alt=""/>
                </div>
                <div className="col-md-6">

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, ullam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias asperiores aut, blanditiis commodi corporis culpa dicta dolore dolorem ea impedit laudantium nisi quasi sequi veniam veritatis voluptate voluptatibus voluptatum?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consectetur eos explicabo impedit. Labore natus numquam veniam veritatis? A aspernatur aut culpa eos esse expedita explicabo saepe temporibus veritatis! Ad aliquam dicta, ipsa nulla placeat quae vel. Cupiditate eligendi est illo provident quasi quos unde. Commodi esse maiores quas quia.</p>
                </div>
            </div>
         <div className="container">
             <Link to={'/Home'} className='btn btn-light-blue ml-5 fa fa-add '>Student</Link>
         </div>




        </React.Fragment>
    )
}

export default College;