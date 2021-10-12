function buttonClick() {
    let inputMail = document.getElementById('input-mail');
    if ((inputMail.value.indexOf('@') > -1 ) && (inputMail.value.indexOf('.') > -1 ) && (inputMail.value.length > 5)){
        alert('Confarmation letter has been sent to your email');
        inputMail.value = '';
    } else{
        alert('Please specify correct email adress');
        inputMail.value = '';
    }
}

export default buttonClick;
