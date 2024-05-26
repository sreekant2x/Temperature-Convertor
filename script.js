function convertTo(targetUnit) {
    const tempInput = document.getElementById('temperature').value;
    const inputUnit = document.getElementById('inputUnit').value;
    const resultDiv = document.getElementById('result');
    
    if (isNaN(tempInput) || tempInput === '') {
        resultDiv.textContent = 'Please enter a valid number';
        resultDiv.classList.add('show');
        return;
    }
    
    const temp = parseFloat(tempInput);
    let convertedTemp;

    if (inputUnit === targetUnit) {
        convertedTemp = temp;
    } else if (inputUnit === 'Celsius') {
        if (targetUnit === 'Fahrenheit') {
            convertedTemp = (temp * 9/5) + 32;
        } else if (targetUnit === 'Kelvin') {
            convertedTemp = temp + 273.15;
        }
    } else if (inputUnit === 'Fahrenheit') {
        if (targetUnit === 'Celsius') {
            convertedTemp = (temp - 32) * 5/9;
        } else if (targetUnit === 'Kelvin') {
            convertedTemp = ((temp - 32) * 5/9) + 273.15;
        }
    } else if (inputUnit === 'Kelvin') {
        if (targetUnit === 'Celsius') {
            convertedTemp = temp - 273.15;
        } else if (targetUnit === 'Fahrenheit') {
            convertedTemp = ((temp - 273.15) * 9/5) + 32;
        }
    }
    
    resultDiv.textContent = `Converted Temperature: ${convertedTemp.toFixed(2)} ${targetUnit}`;
    resultDiv.classList.add('show');
}
