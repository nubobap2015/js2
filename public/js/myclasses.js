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
                return new MyGoodItem(value, this._basket)
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
        const placeToRender = document.querySelector('.goods-list')
        this._items.forEach(El =>{
            El.render(placeToRender)
        })
    }

}

class MyGoodItem extends MyAbstractList {
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
            this._basket._items.push(new MyBasketItem({name: this.name, price: this.price, img: this.img, cnt: 1}, this._basket))
        }
        this._basket.render()
    }

    render(placeToRender) {
        super.render();
        if (placeToRender) {
            const el = document.createElement('div')
            // el.classList.add(this.name)
            el.setAttribute( 'name', this.name)
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

class MyBasketItem extends MyGoodItem {
    
    
    
    render(placeToRender) {
            if (placeToRender) {
            const el = document.createElement('div')
            el.classList.add('MyBasketItem')
            el.setAttribute( 'name', this.name)
            el.innerHTML = `
                Товар: ${this.name} (${this.price} руб.) - ${this.cnt} шт
                <img src="${this.img}" />
                <br><br><br>
                `
            placeToRender.appendChild(el)

            const btnPlus = new MyButton(' + ', () =>{this.cnt++; this._basket.render()})
            const btnMinus = new MyButton(' - ', () =>{this.cnt--; this._basket.render()})
            btnPlus.render(el)
            btnMinus.render(el)
        }
    }
}

class MyBasket extends MyAbstractList {
    name = 'MyBasket'
    _items = []

    constructor() {
        super();
        const placeToRender = document.querySelector('.cart-list')
        const btn2 = new MyButton('Очистить', this.clearAll.bind(this))
        btn2.render(placeToRender)
    }

    clearAll() {
        this._items = []
        const allBasketItems = document.querySelectorAll('.MyBasketItem')
        allBasketItems.forEach(my_element =>{
            my_element.parentNode.removeChild(my_element)
        })


    }
    render() {
       // super.render();
        const placeToRender = document.querySelector('.cart-list')

        this._items.forEach(El =>{
            let my_element = placeToRender.querySelector(`[name=${El.name}]`)
            if (my_element) {
                if (El.cnt > 0) {
                    console.log('Изменение элемента')
                    my_element.innerHTML = `
                                        Товар: ${El.name} (${El.price} руб.) - ${El.cnt} шт
                                        <img src="${El.img}" />
                                        <br><br><br>
                                        `
                                        const btnPlus = new MyButton(' + ', () =>{El.cnt++; El._basket.render()})
                                        const btnMinus = new MyButton(' - ', () =>{El.cnt--; El._basket.render()})
                                        btnPlus.render(my_element)
                                        btnMinus.render(my_element)
        

                } else {
                    console.log('Удаление элемента')
                    my_element.parentNode.removeChild(my_element)
                    this._items.splice(this._items.indexOf(my_element),1)
                }

            } else {
                El.render(placeToRender)
                console.log('Прорисовка элемента')
            }

        })
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
