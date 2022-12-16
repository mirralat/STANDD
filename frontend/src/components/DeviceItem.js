import React, { useContext, useState } from 'react';
import {Card, Col, Image} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {DEVICE_ROUTE, STAR} from "../utils/consts";
import "../styles/DeviceItem.css"
import { Context } from '../index';


const DeviceItem = ({device}) => {
    const {devices} = useContext(Context)

    const [state, setState] = useState(false);
    const [like, setLike] = useState({})

    const navigate = useNavigate();
    return (
        <Col md={3} className='deviceItem'>
            <div className='img'>
                <Image width={150} height={150} src={device.image}/>
            </div>
            <div className='info' onClick={()=>navigate(DEVICE_ROUTE + "/" + device.id)}>
                <div className='name'>{device.name}</div>
                <div className='description'>{device.description}</div>
            </div>
            <div className='bars'>
                <div className='price'>
                    <div className='oldPrice'>{device.price/0.8}</div>
                    <div>{device.price} ₽</div>
                    <div className='credit'>{(device.price / 12).toFixed(3)} ₽/мес</div>
                </div>
                <div className='buttons'>
                    <button className={ !state?'notLiked':'liked'} onClick={(e) => 0}>
                        { !state?
                            <img src={require('../images/like.png')} alt="fireSpot" className='likeIconOff'></img>
                        :
                            <img src={require('../images/like-clicked.png')} alt="fireSpot" className='likeIconOn'></img>
                        }
                    </button>
                    <button onClick={()=>{
                        console.log(device)
                        devices.addBasket(device)
                        }} className='miniBasket'>
                        В корзину
                    </button>
                </div>
            </div>
        </Col>
    );
};

export default DeviceItem;