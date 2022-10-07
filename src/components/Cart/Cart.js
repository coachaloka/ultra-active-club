import React from 'react';
import Break from "../Break/Break";
import './Cart.css'

const Cart = (props) => {
    const {cart} =props;


    return (
        <div className='summary'>
            <div className='title'>
                <h3>Aloka Rani Coach</h3>
                <h5>Dhaka, Bangladesh</h5>
            </div>
            <div className='personal-info'>
                <div>
                    <h3>50kg</h3>
                    <h5>Weight</h5>
                </div>
                <div>
                    <h3>5.2</h3>
                    <h5>Height</h5>
                </div>
                <div>
                    <h3>40 years</h3>
                    <h5>Age</h5>
                </div>
            </div>
            <Break/>
            <div>
                <h3>Course Details</h3>
                <h4 className='course-details'>Course Time: {cart.time}</h4>
            </div>
            <div className='completed'>
                <button className='completed-btn'>Completed!</button>
            </div>
        </div>
    );
};

export default Cart;