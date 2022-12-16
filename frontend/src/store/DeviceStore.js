import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id:0, name:"Все товары"},
            {id: 1, name:"Холодильники"},
            {id: 2, name:"Телефоны"},
            {id: 3, name:"Чайники"},
            {id: 4, name:"Фены"},
            {id: 5, name:"Кондиционеры"},
            {id: 6, name:"Вентиляторы"},
        ]
        this._devices = [
            {id:1, name: "Samsung 1", price:100, category: 1, description:"Оченб хороший", image:"https://3dnews.ru/assets/external/illustrations/2019/06/04/988609/siemens-a35.jpg"},
            {id:2, name: "Samsung 2", price:100, category: 2, description:"Оченб хороший", image:"https://3dnews.ru/assets/external/illustrations/2019/06/04/988609/siemens-a35.jpg"},
            {id:3, name: "Samsung 3", price:100, category: 3, description:"Оченб хороший", image:"https://3dnews.ru/assets/external/illustrations/2019/06/04/988609/siemens-a35.jpg"},
            {id:4, name: "Samsung 4", price:100, category: 1, description:"Оченб хороший", image:"https://3dnews.ru/assets/external/illustrations/2019/06/04/988609/siemens-a35.jpg"},
            {id:5, name: "Samsung 5", price:100, category: 1, description:"Оченб хороший", image:"https://3dnews.ru/assets/external/illustrations/2019/06/04/988609/siemens-a35.jpg"},
            {id:6, name: "Samsung 6", price:100, category: 1, description:"Оченб хороший", image:"https://3dnews.ru/assets/external/illustrations/2019/06/04/988609/siemens-a35.jpg"},
        ]
        this._basketPrice = 0
        this._basket = []
        this._selectedType = {}
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = [{id:0, name:"Все товары"}, ...types];
    }

    setBrands(brands) {
        this._brands = brands;
    }

    setDevices(devices) {
        this._devices = devices;
    }

    setSelectedType(type) {
        this.setPage(1);
        this._selectedType = type;
    }

    setSelectedBrand(brand) {
        this.setPage(1);
        this._selectedBrand = brand;
    }

    setPage(page) {
        return this._page = page;
    }

    setTotalCount(count) {
        return this._totalCount = count;
    }

    setLimit(limit) {
        return this._limit = limit;
    }

    addBasket(basket) {
        this._basketPrice += basket.price
        this._basket = [...this._basket, basket];
    }

    setBasket(basket) {
        this._basket = basket;
    }

    setBasketPrice(price) {
        this._basketPrice = price;
    }

    get types() {
        return this._types;
    }

    get brands() {
        return this._brands;
    }

    get devices() {
        return this._devices;
    }

    get selectedType() {
        return this._selectedType;
    }

    get selectedBrand() {
        return this._selectedBrand
    }

    get Page() {
        return this._page;
    }

    get totalCount() {
        return this._totalCount;
    }

    get Limit() {
        return this._limit;
    }

    get basket() {
        return this._basket;
    }

    get basketPrice() {
        return this._basketPrice
    }
}