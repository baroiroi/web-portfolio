let error;

$(document).ready(function () {
    const name = $('#name');
    const number = $('#number');
    const region = $('#region');
    const orders = $('#orders');
    error = $('#error');

    $('#submit').click(() => {
        // refresh to gray bg
        name.css('background-color', '#E3E3E3');
        number.css('background-color', '#E3E3E3');

        
        if (!name.val()) {                          // check name
            updateError(name, 'Name field is empty.');

        } else if (number.val().length !== 10) {    // check number
            updateError(number, 'Invalid number. Must have exactly 10 digits.');

        } else {                                    // valid
            error.html('');

            // create new order
            const order = $('<div class="order"></div>')
                .addClass(region.val())
                .append('<img src="./public/images/icon.webp">')
                .append('<div class="info"></div>')
                .append('<button class="remove">X</button>');

            // add info
            order.children('.info')
                .append(`<p class="text">${name.val()}</p>`)
                .append(`<p class="text">'${number.val()}</p>`);

            // delete parent div when clicked
            order.children('button').click(function () {
                $(this).parent().remove();
            });

            orders.append(order);

            // refresh input fields
            name.val('');
            number.val('');
            region.prop('selectedIndex', 0);
        }
    });

});

function updateError(elem, msg) {
    elem.css('background-color', '#FF0000');
    error.html(msg);
}
