class MyAbstractList {
    name = 'MyAbstractList'
    _items = null
    _basket = null

    render() {
        console.log(`Отрисовка ${this.name}`)
    }

}

class MyGoodsList extends MyAbstractList {
    name = 'MyGoodsList'
    _items = []

    constructor(basket) {
        super();
        this._basket = basket
        let goods = this.fetchGoods()
        this._items  = goods.map(value => {
                console.log(`Создан элемент ${value.name}`)
                return new MyGoodItem(value)
                // return new MyBasketItem(value)
            })
        console.log(this._items)
        this.render()
    }

    fetchGoods() {
        return [
            {name: 'G1', price: '100', img: '/img/goodsimg/noimage.jpg', cnt: 50 },
            {name: 'G2', price: '200', img: '/img/goodsimg/noimage.jpg', cnt: 500},
            {name: 'G3', price: '400', img: '/img/goodsimg/noimage.jpg', cnt: 250},
            {name: 'G4', price: '600', img: '/img/goodsimg/noimage.jpg', cnt: 7  },
            ]
    }

    render() {
        super.render();
        this._basket.ppp()
        this._items.forEach(El =>{
            El.render()
        })
    }

}

class MyGoodItem extends MyAbstractList {
    name = 'MyGoodItem'
    price = 0
    img = '/img/goodsimg/noimage.jpg'
    cnt = 0

    constructor({name, price, img, cnt}) {
        super();
        this.name = name
        this.price = parseFloat(price)
        this.img = img
        this.cnt = cnt
    }

    addToCart() {
        console.log(this.name)
    }

    render() {
        super.render();
        const placeToRender = document.querySelector('.goods-list')
        if (placeToRender) {
            const el = document.createElement('div')
            el.innerHTML = `
                Товар: ${this.name} (${this.price} руб.)
                <img src="${this.img}" />
                <br><br><br>
                `
            const btn2 = new MyButton('+ в корзину', this.addToCart.bind(this))
            placeToRender.appendChild(el)
            btn2.render(el)
        }
    }


}

class MyBasketItem extends MyGoodItem {

}

class MyBasket extends MyAbstractList {

    constructor() {
        super();
    }

    ppp (){
        console.log('basket rulit')
    }
}

class MyButton extends MyAbstractList{
    name = 'MyButton'
    text = ''
    callback = null

    constructor(text, callback) {
        super();
        this.text = text
        this.callback = callback
    }

    render(placeToRender) {
        super.render();
        if (placeToRender) {
            const btn = document.createElement('button')
            btn.classList.add('btn')
            btn.innerText = this.text
            placeToRender.appendChild(btn)
            if (typeof(this.callback) === 'function') {
                btn.addEventListener('click', () =>{
                    this.callback()
                })
            }
        }
    }


}

const bskt = new MyBasket
const aaa = new MyGoodsList(bskt)
