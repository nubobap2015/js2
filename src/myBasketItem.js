import MyGoodItem from './myGoodItem'
import MyButton from './myButton'

export default class MyBasketItem extends MyGoodItem {
    

    render(placeToRender) {
            console.log(11111)
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