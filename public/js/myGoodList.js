import MyAbstractList from './myAbstractList'

export default class MyGoodsList extends MyAbstractList {
    name = 'MyGoodsList'
    _items = []
    _numberOfDataFile = 1

    getMoreGoods() {
       this._numberOfDataFile ++
       this.fetchGoods()
           .then(() => {
                this.render()
            })
    }

    constructor(basket) {
        super();
        this._basket = basket
        this.fetchGoods()
            .then(() => {
                this.render()
            })
        console.log(this._items)

        const moreDataBtn = new MyButton('Еще данных...', this.getMoreGoods.bind(this))
        moreDataBtn.render(document.querySelector('.more-buttons'))
    }

    fetchGoods() {
        let tmpArray = []
       // return fetch(`http://localhost:3000/json/data${this._numberOfDataFile}.json`)
        return fetch(`${document.location.protocol}//${document.location.host}/json/data${this._numberOfDataFile}.json`)
            .then(res => {
                return res.ok ? res.json():Promise.reject(res)
            })
            .then(res => {
                tmpArray = res.data.map(value => {
                    console.log(`Создан элемент ${value.name}`)
                    let tmp =  new MyGoodItem(value, this._basket)
                    console.log(tmp.name)
                    return tmp
                })
                this._items = this._items.concat(tmpArray)
                console.log(this._items)
            })
            .catch(() => {
                document.querySelector('.more-buttons').style.display = 'none'
            })
    }

    render() {
        super.render();
        console.log('render')
        const placeToRender = document.querySelector('.goods-list')
        this._items.forEach(El =>{
            El.render(placeToRender)
        })
    }

}