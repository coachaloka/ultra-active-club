import React from 'react';
import './Summary.css';

const Summary = (props) => {
    const{ cart } = props

     let total = 0;
     for(const product of cart){
        total = total + product.time;
     }

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
                <h4 className='course-details'>Course Time: {total}</h4>
           </div>
            
           
        
            <button className='completed-btn'>Course Completed</button>
            

           

        </div>
    );
};

export default Summary;