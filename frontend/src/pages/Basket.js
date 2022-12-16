import React, {useContext, useEffect, useState} from 'react';
import {Card, Col, Container, Image, Row} from "react-bootstrap";
import {Context} from "../index";
import BasketItem from "../components/BasketItem";
import {observer} from "mobx-react-lite";
import "../styles/Basket.css"
import { SHOP_ROUTE } from '../utils/consts';
import { useNavigate } from 'react-router-dom';
import { values } from 'mobx';

const Basket = observer(() => {
    const {devices} = useContext(Context);
    const navigate = useNavigate();
    const removeItem = (deviceId) => {
        devices.setBasket(devices.basket.filter(({id, price}) => {
            if(id !== deviceId) return true;
            devices.setBasketPrice(devices.basketPrice - price);
            return false;
        }));
    }
    return (
        <Container >
            <div className='content'>
                <div className='left'>
                    <div >
                        <div className='basketHeadTop'>
                            <div className='mainHead'>Корзина</div><div className='subHead'>{devices.basket.length} товар(ов)</div>
                        </div>
                        <div className='basketHeadBot'>
                            <button className='basketButton'>Выбрать все</button><button 
                            onClick={()=> {
                                devices.setBasket([]);
                                devices.setBasketPrice(0);
                            }}className='basketButton'>Удалить все</button>
                        </div>
                    </div>  
                    
                    {devices.basket.length !== 0 ? 
                        devices.basket.map(device => <BasketItem k={device.id} img={device.image} name={device.name} price={device.price} removeItem={removeItem}/>)
                    :
                        <div className='empty'>
                            <img src={require("../images/empty.png")}></img>
                            <p >Корзина пуста</p>
                            <p className='small'>пожалуйста добавьте что-либо для покупки</p>
                            <button onClick={()=>navigate(SHOP_ROUTE)} className='return'>На главную</button>
                        </div>
                    }
                </div>
                <div className='right'>
                    <div className='buyBox'>
                        <div className='topBox'>
                            Заказ
                        </div>
                        <div className='midBox'>
                            <div className='midBoxHead'>Итого:</div>
                            <div className='midBoxBody'>
                                <div>{devices.basket.length} товар(ов)</div>
                                <div>{devices.basketPrice} р.</div>
                            </div>
                            <button className='buyButton'>Купить</button>
                        </div>
                        <div className='botBox'>
                            <button className='mistake' href="https://vk.com/jacquesak_88">Нашли ошибку? Сообщите нам}</button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
})

export default Basket;
