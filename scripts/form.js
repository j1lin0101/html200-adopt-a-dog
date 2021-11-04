$(function () {
    $('form').submit(function (event) {
        event.preventDefault();
        const values = $(this).serializeArray();
        console.log(values);
        for (let i = 0; i < values.length; i += 1) {
            const name = values[i].name;
            const value = values[i].value;

            console.log(name + " is: " + value);
        }
    })
});