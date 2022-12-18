import {makeAutoObservable} from "mobx";
import {RUB, USD} from "../utils/consts";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 0, name: "Все товары"},
            {id: 1, name: "Холодильники"},
            {id: 2, name: "Телефоны"},
            {id: 3, name: "Чайники"},
            {id: 4, name: "Фены"},
            {id: 5, name: "Кондиционеры"},
            {id: 6, name: "Вентиляторы"},
        ]
        this._devices = []
        this._basketPrice = 0
        this._basket = []
        this._selectedType = {}
        this._like = {}
        this._currency = USD
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = [{id: 0, name: "Все товары"}, ...types];
    }

    setDevices(devices) {
        this._devices = devices;
    }

    setSelectedType(type) {
        this._selectedType = type;
    }

    setCurrency(currency) {
        return this._currency = currency;
    }

    addBasket(basket) {
        this._basket = [...this._basket, basket];
        this._basketPrice = this._basket.reduce((previousValue, currentValue) => previousValue + currentValue.price, 0)
    }

    setBasket(basket) {
        this._basket = basket;
    }

    setBasketPrice(price) {
        this._basketPrice = price;
    }

    setLike(device) {
        this._like = device;
    }

    get types() {
        return this._types;
    }

    get devices() {
        return this._devices;
    }

    get selectedType() {
        return this._selectedType;
    }

    get basket() {
        return this._basket;
    }

    get basketPrice() {
        return this._basketPrice;
    }

    get like() {
        return this._like;
    }

    get currency() {
        return this._currency;
    }
}