import MyAbstractList from './myAbstractList'
import MyButton from './myButton'


export default class MyGoodItem extends MyAbstractList {
    name = 'MyGoodItem'
    price = 0
    img = '/img/goodsimg/noimage.jpg'
    cnt = 0

    constructor({name, price, img, cnt}, basket) {
        super();
        this.name = name
        this.price = parseFloat(price)
        this.img = img
        this.cnt = cnt
        this._basket = basket
    }

    addToCart() {
        let my_el = undefined
        this._basket._items.forEach(el =>{
           if (this.name == el.name) {
               my_el = el
           }
        })
        if (my_el) {
             if (this.cnt>my_el.cnt){
                my_el.cnt ++
            } else {
                console.warn(`Нет такого кол-ва товара`)
            }
        } else {
            //this._basket._items.push(new MyBasketItem({name: this.name, price: this.price, img: this.img, cnt: 1}, this._basket))
            this._basket.addToCart(this);
        }
        this._basket.render()
    }

    render(placeToRender) {
        super.render();
        if (placeToRender) {
            if (placeToRender.querySelector(`[name=${this.name}]`)) {
                console.log(`Пропускаю ${this.name}`)
            } else {
                const el = document.createElement('div')
                el.setAttribute('name', this.name)
                el.innerHTML = `
                Товар: ${this.name} (${this.price} руб.) - ${this.cnt} шт
                <img src="${this.img}" />
                <br><br><br>
                `
                const btn2 = new MyButton('+ в корзину', this.addToCart.bind(this))
                placeToRender.appendChild(el)
                btn2.render(el)
            }
        }
    }

}