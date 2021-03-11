import MyAbstractList from './myAbstractList'

export default class MyBasket extends MyAbstractList {
    name = 'MyBasket'
    _items = []

    constructor() {
        super();
        const placeToRender = document.querySelector('.cart-list')
        const btn2 = new MyButton('Очистить', this.clearAll.bind(this))
        btn2.render(placeToRender)
    }

    updateSummary() {
        let summ = 0
        this._items.forEach(el=>{
            summ += el.cnt*el.price
        })
        document.querySelector('.summary').innerHTML = `Сумма заказа: ${summ}`
    }

    clearAll() {
        this._items = []
        const allBasketItems = document.querySelectorAll('.MyBasketItem')
        allBasketItems.forEach(my_element =>{
            my_element.parentNode.removeChild(my_element)
        })
        this.updateSummary()
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
        this.updateSummary()
    }

}