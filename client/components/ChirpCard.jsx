import React from 'react';
import { Link } from "react-router-dom";

const ChirpCard = ({ id, username, content, created }) => {
    return (
        <form action="">
            <div lassName="card row-3">
                <div className="card-header">
                    {username}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{content}</h5>
                    <footer className="blockquote-footer">{created}</footer>
                </div>
                <Link to={`/chirp/${id}`}>
                    <button className='btn btn-sm btn-dark'>Admin Options</button>
                </Link>
            </div>
        </form>
    )
}

export default ChirpCard;