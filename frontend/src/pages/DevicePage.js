import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {Context} from "../index";
import {LOGIN_ROUTE, STAR} from "../utils/consts";
import {Navigate, useParams} from "react-router-dom";
import {addBasketItem, fetchOneDevice} from "../components/https/deviceAPI";
import UserStore from '../store/UserStore';
import { useNavigate } from 'react-router-dom';
import "../styles/DevicePage.css"

const DevicePage = () => {

    const {devices} = useContext(Context);
    const {user} = useContext(Context);
    const navigate = useNavigate();
    const [device, setDevice] = useState({info: []});
    const {id} = useParams();
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    return (
        <Container md={4} className="mt-3">
            <div className='deviceHead'>
                {device.name}
            </div>
            <div className='deviceBody'>
                <div className='deviceImg'>
                    <Image width={"100%"} height={"auto"} src={"http://127.0.0.1:8000" + device.image}/>
                </div>
                <div className='deviceInfo'>
                    <div className='deviceShow'>
                        <div className='devicePrice'>
                            {device.price} ₽
                        </div>
                        <button
                            className='deviceButton' 
                            onClick={() => {
                                user.isAuth? devices.addBasket(device): navigate(LOGIN_ROUTE)
                            }}>
                            Добавить в корзину
                        </button>
                    </div>
                    <div className='deviceText'>
                        {device.description}
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default DevicePage;