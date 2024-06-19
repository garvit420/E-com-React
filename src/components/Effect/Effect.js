import React, { useState, useEffect } from 'react';

function Effect() {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    
    console.log("rerendered");

    useEffect(() => {
        console.log("mounted");
    }, [count]);

    return (
        <div>
            <button onClick={() => {setCount(count +1)}}>hi</button>
            <p>{count}</p>
            <button onClick={() => {setCount1(count1 +1)}}>hello</button>
            <p>{count1}</p>
        </div>
    );
}

export default Effect;