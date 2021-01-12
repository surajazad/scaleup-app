import React from 'react'
import './Card.css';
const Card = (props) => {
    console.log(props);
    const {headerName, content, cta} = props.value;
    console.log(headerName + " " + content + " " + cta);
    return (
        <div className="card">
            <div className="headerName">
                {headerName}
            </div>
            <div className="content">
                {content}
            </div>
            <div className="cta">
                <button>{cta}</button>
            </div>
        </div>
    )
}

export default Card;