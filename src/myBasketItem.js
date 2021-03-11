import MyAbstractList from './myAbstractList'

export default class MyBasketItem extends MyGoodItem {
    

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