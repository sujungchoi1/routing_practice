import React from 'react';
import { Link, navigate } from '@reach/router';

const PageOne = props => {

    const onClickHandler = (e) => {
        e.preventDefault();
        navigate('/route-two');
    }
    return (
        <div>
            You are in Page One
            <br/>
            <Link to="/route-two">Go to Page Two</Link>
            <button onClick={onClickHandler}>Programatically nativate</button>
        </div>
    )
}

export default PageOne;