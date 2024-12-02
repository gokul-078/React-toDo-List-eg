import React from 'react';

// In javascript we use onclick events like below one:
// And passing the parameter inside the onclick is like below one:

/*
const Onclick = () => {

    function change1(){
    console.log("The button is clicked")
    }

    function changeName(name){
    console.log("The button is clicked by "+name)
    }

    return (
        <div>
            <button onClick={change1}>Click me</button>
            <button onClick={changeName("Gokul")}>Click me</button>  // We can't pass like this in react.
        </div>
    )
}

export default Onclick;
*/


// To pass a parameter inside the onclick events:

const Onclick = () => {

    // Passing parameter inside the arguments is done using anonumous function in front of function name.
    function change1(name){
        console.log("The button is clicked by "+name)
    }

    // Finding the target of the element by 'event' here in react 'event is written as 'e':
    function handleClick(e){
        console.log(e.target.innerText);
    }

    return (
        <div>
            <button onClick={() => change1("Gokul")}>Click me</button>  {/*Anonmous function is used infront*/}
            <button onClick={(e) => handleClick(e)}>Target Click</button>  {/*We gave 'event' as 'e' */}
        </div>
    )
}

export default Onclick;
