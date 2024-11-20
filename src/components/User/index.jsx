import React from 'react'
import Adress from '../Adress'
import Car from '../Car'
import './index.css';

function User(props) {
    const { firstName, lastName, phone, email, adress, image, cars } = props.user;
    return (
        <div className='card'>
            <img src={image} alt="" />
            <h3>{firstName} {lastName}</h3>
            <div>
                <span>{phone}</span>
                <span>{email}</span>
            </div>
            <Adress adress={adress}></Adress>
            {
                cars.length > 0 && cars.map((car, index) => {
                    return (
                        <Car key={index} car={car}></Car>
                    )
                })
            }
        </div>
    )
}

export default User