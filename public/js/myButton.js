class MyButton {
    text = ''
    callback = null

    constructor(text, callback, params=null) {
        this.text = text
        this.callback = callback
        this.params = params
    }

    render(placeToRender) {
        if (placeToRender) {
            const btn = document.createElement('button')
            btn.classList.add('btn')
            btn.innerText = this.text
            placeToRender.appendChild(btn)
            if (typeof(this.callback) === 'function') {
                btn.addEventListener('click', () =>{
                    if (this.params)
                        this.callback(...this.params) // ... - это просто "бомба"!
                    else this.callback()
                })
            }
        }
    }


}