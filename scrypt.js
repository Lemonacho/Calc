function OSN() {
    let buttons = document.querySelectorAll('button');
    let display = document.querySelector('#led');
    let del = document.querySelector('#del');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            let buttonvalue = this.textContent;
            if (buttonvalue == 'C') {
                clear();
            } else if (buttonvalue == '=') {
                calculate();
            } else {
                display.value += buttonvalue;
            }
        });
    }

    del.addEventListener('click', function() {
        clear();
    });

    function clear() {
        display.value = ' ';
    }

    function calculate() {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = 'Ошибка(буква т.е неверное значение)';
        }
    }
}

OSN();
