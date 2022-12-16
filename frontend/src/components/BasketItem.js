import React, {useContext} from 'react';
import {Button, Card, Col, Image, Row} from "react-bootstrap";
import context from 'react-bootstrap/esm/AccordionContext';
import "../styles/BasketItem.css"
import { Context } from '..';

const BasketItem = ({k, img, name, price, removeItem}) => {
    const {devices} = useContext(Context)
    return (
        <div className='item'>
            <div className='leftItem'>
                <Image className="itemImg" src={img} />
            </div>
            <div className='midItem'>
                {name}
            </div>
            <div className='rightItem'>
                <div className="itemPrice">{price} ₽</div>
                <div className='rightItemButtons'>
                    <button className="chooseButton" onClick={() => console.log(k)}>
                        Выбрать
                    </button>
                    <button className="removeButton" onClick={() => removeItem(k)}>
                        Удалить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BasketItem;
