// function appendToDisplay(number) {
//     const targetElement = document.getElementById('targetElement');
//     const currentText = targetElement.textContent;
//     targetElement.textContent = currentText + number;
// }

let inputText = '';

        function appendToDisplay(number) {
            inputText += number;
            updateDisplay();
        }

        function appendOperator(operator) {
            if (inputText !== '') {
                inputText += operator;
                updateDisplay();
            }
        }

        function calculateResult() {
            try {
                const result = eval(inputText);
                inputText = result.toString();
                updateDisplay();
            } catch (error) {
                inputText = '';
                updateDisplay();
                alert('Помилка обчислення.');
            }
        }

        function clearDisplay() {
            inputText = '';
            updateDisplay();
        }

        function updateDisplay() {
            const targetElement = document.getElementById('targetElement');
            targetElement.textContent = inputText;
        }