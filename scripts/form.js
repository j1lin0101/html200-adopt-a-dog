const form = document.getElementById('checkout');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formInputs = document.getElementsByTagName('input');
    console.log(formInputs);
    for (let i = 0; i < formInputs.length - 1; i += 1) {
        if (formInputs[i].getAttribute('type') == 'radio') {
            if (!formInputs[i].checked) {
                continue;
            }
        }

        console.log(formInputs[i].name + " is: " + formInputs[i].value);
    }

    const formSelect = document.getElementsByTagName('select')[0];
    console.log(formSelect.name + " is: " + formSelect.value);

    alert('Thank you. The form information has been received.');
});
