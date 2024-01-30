export function setMaskTel(attribute) {
    const inputs = document.querySelectorAll(`[${attribute}]`);
    
    inputs.forEach((input) => {
        input.addEventListener('input', onPhoneNumber, false);
        input.addEventListener('keydown', onPhoneKeyDown);
        input.addEventListener('paste', onPhonePaste, false);
        input.value = '+375 ';
        input.maxLength = 19;

        function getInputNumbersValue(input) {
            return input.value.replace(/\D/g, '');
        }

        function onPhoneNumber(e) {
            let inputNumbersValue = getInputNumbersValue(input),
                formattedInputValue = '+375 ',
                selectionStart = input.selectionStart;

            if (input.value.length != selectionStart) {
                if (e.data && /\D/g.test(e.data)) {
                    input.value = inputNumbersValue;
                }
                return;
            }

            if (inputNumbersValue.length > 3) formattedInputValue += '(' + inputNumbersValue.slice(3, 5);
            if (inputNumbersValue.length > 5) formattedInputValue += ') ' + inputNumbersValue.slice(5, 8);
            if (inputNumbersValue.length > 8) formattedInputValue += '-' + inputNumbersValue.slice(8, 10);
            if (inputNumbersValue.length > 10) formattedInputValue += '-' + inputNumbersValue.slice(10, 12);
            input.value = formattedInputValue;
        }

        function onPhoneKeyDown(e) {
            const inputValue = getInputNumbersValue(input);
            if (e.keyCode == 8 && inputValue.length <= 1) {
                input.value = '';
            }
        }

        function onPhonePaste(e) {
            const inputNumbersValue = getInputNumbersValue(input);
            const pasted = e.clipboardData || window.clipboardData;

            if (pasted) {
                const pastedText = pasted.getData('Text');
                if (/\D/g.test(pastedText)) {
                    input.value = inputNumbersValue;
                    return;
                }
            }
        }
    });
}

export function setWheelNumber(attribute) {
	const inputs = document.querySelectorAll(`[${attribute}]`);
	inputs.forEach((input) => {
		input.addEventListener('wheel', wheelNumber);
		input.addEventListener('input', limitationNumber);
	});

	function wheelNumber(e) {
		e.preventDefault();
		const input = e.target;
		const minNumber = input.min || 0;
		const maxNumber = input.max || 100;
		let value = input.value;
		const step = +input.step || 1;
		value = e.deltaY > 0 ? +input.value - step : +input.value + step;
		input.value = value <= minNumber ? minNumber : value >= maxNumber ? maxNumber : value;
	}

	function limitationNumber(e) {
		let input = e.target;
		let inputValue = input.value;
		let maxValue = input.max || 100;
		let minValue = input.min || 0;

		if (inputValue == '') return (e.target.value = '');
		if (inputValue.length > 1 && inputValue[0] == 0) inputValue = inputValue.slice(1);
		if (+inputValue > +maxValue) inputValue = maxValue;
		else if (+inputValue < +minValue) inputValue = minValue;
		e.target.value = inputValue;
	}
}

export function setDate(attribute, min = [0, 0, 1], max = [1, 0, 1]) {
	const addZero = (n) => (n < 10 ? '0' + n : n);
	const date = new Date();
	const formatDate = (dateShift) => {
		return `${date.getFullYear() + dateShift[0]}-${addZero(
			date.getMonth() + 1 + dateShift[1]
		)}-${addZero(date.getDate() + dateShift[2])}`;
	};

	if (attribute) {
		const inputs = document.querySelectorAll(`[${attribute}]`);
		inputs.forEach((input) => {
			input.min = formatDate(min);
			input.max = formatDate(max);
		});
	} else return formatDate([0, 0, 0]);
}
