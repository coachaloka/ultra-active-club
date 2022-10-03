import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const{ cart } = props

     let total = 0;
     for(const product of cart){
        total = total + product.time;
     }

    return (
        <div className='cart'>

            <h3>Aloka Rani Coach</h3>
            <h5>Dhaka, Bangladesh</h5>

            <p>50kg 5.2 40year<b/>Weight Height Age</p>
           
            <h3>Add Break</h3>
            <p>2m 3m 4m 5m 6m</p>
            <h3>Course Details</h3>
            <p>Course Time: {total}</p>
            <p>Break Time</p>
            <button className='complete-btn'>Course Completed</button>

        </div>
    );
};

export default Cart;