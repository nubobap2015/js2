import MyButton from './myButton'

export default class MyAbstractList {
    name = 'MyAbstractList'
    _items = null
    _basket = null

    render() {
        console.log(`Отрисовка ${this.name}`)
    }

}