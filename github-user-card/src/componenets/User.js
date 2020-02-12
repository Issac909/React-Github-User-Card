import React from 'react';

const UserCard = (props) => {
    return (
    <a href = {props.link}>
        <div key = {props.id} className = 'user'>
            <img src = {props.avatar} />
            <div className = 'info'>
                <h2>{props.name}</h2>
                <p>{props.bio}</p>  
            </div>     
        </div>
    </a>
    )
}

export default UserCard;