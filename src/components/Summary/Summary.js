import React from 'react';
import Break from '../Break/Break';
// import {ToastContainer,toast} from 'react-toastify';
import './Summary.css';


const Summary = (props) => {
   
    return (
        <div className='summary'>
            <div className='title'>
                <h3>Aloka Rani Coach</h3>
                <h5>Dhaka, Bangladesh</h5>
            </div>
            <div className='personal-info'>
                <div>
                    <h3>50kg</h3>
                    <p>Weight</p>
                </div>
                <div>
                    <h3>5.2</h3>
                    <p>Height</p>
                </div>
                <div>
                    <h3>40years</h3>
                    <p>Age</p>
                </div>
            </div>
            <div>

            </div>
            
           <div>
                <h3>Course Details</h3>
                <h4 className='course-details'>Course Time: {props.time}</h4>
           </div>
           <Break />
           {/* <div className='completed-btn'>
            <button onClick={notify} className="completed">Completed!</button>
               <ToastContainer 
               position="top-center"
               autoClose={5000}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick
               rtl={false}
               pauseOnFocusLoss draggable pauseOnHover
               />
           </div> */}
        </div>
    );
};

export default Summary;