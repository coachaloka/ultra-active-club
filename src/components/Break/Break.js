import React, {useState} from 'react';
import './Break.css';


const Break = () => {
    const [breakTime, setBreakTime] = useState(0);
    
    return (
        <div>
            <div>
            <h3>Add a Break</h3>
            <div className="break">
                <button onClick={()=>setBreakTime(5)} className="break-times">5m</button>
                <button onClick={()=>setBreakTime(7)} className="break-times">7m</button>
                <button onClick={()=>setBreakTime(8)} className="break-times">8m</button>
                <button onClick={()=>setBreakTime(9)} className="break-times">9m</button>
                <button onClick={()=>setBreakTime(10)} className="break-times">10m</button>
            </div>
            <div>
                <h4 className="break-times">Break Time: {breakTime} m </h4>
            </div>
        </div>
        </div>
    );
};

export default Break;