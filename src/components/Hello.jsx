import React from 'react';
import { Link } from '@reach/router';

const Hello = props => {

    return (
        <h1>Your word is: {props.hello} </h1>

    );
}

export default Hello;