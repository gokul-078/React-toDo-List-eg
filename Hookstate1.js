
import React from 'react';
import { useState } from 'react';


// Let's see HookState in funtion and object:

const Hookstate1 = () => {

    // HookState in function:

    // Eg:1 The o/p of below will only run whenever the page reloads but in useState it will reloads whenever the another useState is called. So we can't pass a function like this in useState:
    /*
    function namee(){
        console.log("My name is Gokul!")
    }

    const [name, setName] = useState(namee());
    */

    // Eg:2 We can use below one for passing function in useState:
    function namees(){
        return console.log("My name is Gokul!");
    }

    const [names, setNames] = useState(() => namees());

    // HookState in object:
    const [car, setCar] = useState({carName: "Bugatti", launch: 2020})

    return (
        <main>
            <p>This car is a {car.carName} and it's launched on {car.launch}</p>
        </main>
    )
}

export default Hookstate1;