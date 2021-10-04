import { faFrown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './NotFound.css';

const NotFound = () => {
    const fontElement = <FontAwesomeIcon icon={faFrown}></FontAwesomeIcon>
    return (
        <>
            
            <div className="mt-5 text-bold">
                <h1 className="display-1 theme-color">{fontElement}</h1>
                <h2 className="display-1">404</h2>
                <h4>Page Not Found</h4>
            </div>
        </>
    );
};

export default NotFound;