import React from 'react';
import { Link } from '@reach/router';

const Color = (props) => {

    return (
        // <h1 style={{backgroundColor: blue}}>Your word is: {props.hello} </h1>
        <h1 style={{backgroundColor: props.color, color: props.background, height: "100px", paddingTop: "50px"} }>Your word is: {props.hello} </h1>

    );
}

export default Color;