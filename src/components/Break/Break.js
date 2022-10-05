import React from 'react';
import './Break.css';
import { useState } from 'react';

const Break = () => {
    const [breaktime, Breaktime] = useState(0);

    return (
        <div>
           <div>
            <h3>Add a Break</h3>
           </div>
           <div className='break'>
                <button onClick={()=> setBreakTime(5)} className="break-times">5m</button>
                <button onClick={()=> setBreakTime(6)} className="break-times">6m</button>
                <button onClick={()=> setBreakTime(7)} className="break-times">7m</button>
                <button onClick={()=> setBreakTime(8)} className="break-times">8m</button>

           </div>
            
        </div>
    );
};

export default Break;