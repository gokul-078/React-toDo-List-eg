
// State is a predefined function in react framework:
// State can't be used conditionally and also can't use repeatedly. 
/* Eg:
const Hookstate = () => {

    function change(){
        const nameChange = ['first', 'second', 'third', 'fourth', 'fifth'];
        const nameIndex = Math.floor(Math.random()*5);
        useState();  // Three useState are used this can't be used like this:
        useState();
        useState();

        // It can't be used conditionally it will throw some error:
        if(true){
            useState();
        }
    }
*/


import React from 'react';
import { useState } from 'react';

// HookState are normally contains two values first one is default values and second one is changing value:
// Syntax will be like - const [first_value, second_value] = useState(12);

const Hookstate = () => {

    // HookState Eg:1
    function subtract(){
        setCount(count - 1);
    }
    
    const [count, setCount] = useState(99);  // This the useState Syntax:

    function add(){  
        setCount(count + 1);
    }

    // Eg:2 count given as function: Here, the prevCount is a counts:
    function subtraction(){
        setCounts((prevCount) => prevCount - 1);
    }
    
    const [counts, setCounts] = useState(99);  // This the useState Syntax:

    function addition(){  
        setCounts((prevCount) => prevCount + 1);
    }

    // Eg:3 - we can't use like this. Below one will not increase three numbers, It increse only one number
    /*
    function subtract(){
        setCount(count - 1);
        setCount(count - 1);
        setCount(count - 1);
    }
    
    const [count, setCount] = useState(99);  // This the useState Syntax:

    function add(){  
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
    }
    */
   // If we want to increase the number as three times below one is used:
    function subtract1(){
        setCount1((count1) => {return count1 - 1});
        setCount1((count1) => {return count1 - 1});
        setCount1((count1) => {return count1 - 1});
    }
    
    const [count1, setCount1] = useState(99);  // This the useState Syntax:

    function add1(){  
        setCount1((count1) => {return count1 + 1});
        setCount1((count1) => {return count1 + 1});
        setCount1((count1) => {return count1 + 1});
    }

    // Eg:4
    
    const [name, setName] = useState("first")

    function change(){
        const nameChange = ['first', 'second', 'third', 'fourth', 'fifth'];
        const nameIndex = Math.floor(Math.random()*5);
        setName(nameChange[nameIndex]);
    }


    return(
        <main>
            <br />

            <p>Single number increasing</p>
            <button onClick={subtract}>-</button>
            <span>{count}</span>
            <button onClick={add}>+</button>

            <p>Single number increasing as function</p>
            <button onClick={subtraction}>-</button>
            <span>{counts}</span>
            <button onClick={addition}>+</button>

            <p>Three number increasing</p>
            <button onClick={subtract1}>-</button>
            <span>{count1}</span>
            <button onClick={add1}>+</button>

            <p>It's the React {name} App!</p>
            <button onClick={change}>Change!</button>
        </main>
    )
}

export default Hookstate;