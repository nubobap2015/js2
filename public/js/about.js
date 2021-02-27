// Так и не придумал как тут можно эффективно использовать класс
const FORM_CLASS = 'my_form'
const my_form = document.querySelector(`.${FORM_CLASS}`);
if (my_form) {

    function checkStr(chekedString, regExpString) {
       return (chekedString.search(regExpString) === 0)
    }

    function checkInput(input, regExpString) {
        if (checkStr(input.value, regExpString)) {
            input.classList.remove('red_border')
            input.classList.add('green_border')
            return true
        } else {
            input.classList.add('red_border')
            input.classList.remove('green_border')
            return false
        }
    }

    function checkForm(aform){
        let checkResult = true
        const formValidControls = [
            {name: "kandidatName", validRegEx: /^[a-zA-Zа-яА-Я]+$/},
            {name: "telefonnummer", validRegEx: /^\+7\(\d\d\d\)\d\d\d-\d\d\d\d$/},
            {name: "email", validRegEx: /^\S+@\S+\.\S+$/},
        ]

        formValidControls.forEach( element => {
            const inputTag = aform.querySelector(`[name="${element.name}"]`)
            if (inputTag) {
                checkResult = checkInput(inputTag, element.validRegEx) && checkResult
            }
        })

        console.log(`Результат валидации формы: ${checkResult}`)
    }

    const validateButton = new MyButton('Отправка данных', checkForm,[my_form])
    validateButton.render(my_form)
} else {
    console.warn(`Не найден элемент с классом "${FORM_CLASS}" на "${document.URL}"`)
}