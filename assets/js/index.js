const confirmBtn = document.querySelector('.confirm');
confirmBtn.addEventListener('click', handleConfirmBtn);

function handleConfirmBtn() {
    let userName = document.querySelector('.inputName');
    let cardNumber = document.querySelector('.inputCardNumber');
    let cardMonth = document.querySelector('.monthText');
    let cardYear = document.querySelector('.yearText');
    let securityNumber = document.querySelector('.securityNumberText');

    if (
        userName.value !== '' &&
        cardNumber.value.length === 16 &&
        cardMonth.value.length === 2 &&
        cardYear.value.length === 2 &&
        securityNumber.value.length === 3
    ) {
        document.querySelector('.cardOwner').innerHTML = userName.value;
        document.querySelector('.IBAN').innerHTML = cardNumber.value;
        document.querySelector('.cardExpDate').innerHTML = `${cardMonth.value}/${cardYear.value}`;
        document.querySelector('.grey-area').innerHTML = securityNumber.value;
        document.querySelector('.check-section').classList.add('dBlock');
        document.querySelector('.input-section').classList.add('dNone');

    } else {
        const inputs = [
            document.querySelector('.inputName'),
            document.querySelector('.inputCardNumber'),
            document.querySelector('.monthText'),
            document.querySelector('.yearText'),
            document.querySelector('.securityNumberText')
        ];
        inputs.forEach(input => {
            if (input.value === '') {
                input.classList.add('invalid-input');
            } else {
                input.classList.remove('invalid-input');
            }
        });
    }
}