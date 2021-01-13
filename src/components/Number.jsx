import React from 'react';
// import { Link } from '@reach/router';

const Number = ({number}) => {

    const newNumber = parseInt(number)

    return (
        // <h1>Your Number is: {props.number} </h1>
        <div>
            { isNaN(newNumber) ? <h1>the word is : {number} </h1> : <h1> the number is: {number} </h1>}

        </div>

    );
}

export default Number;