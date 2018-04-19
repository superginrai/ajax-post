
console.log('JAVA JIVE');

$(document).ready(onReady);



function onReady() {
    console.log('jQuery is up and running');
    $.ajax({
        type: 'GET', //"method" would be the same in jQuery
        url: '/records'
    })
    .then(function(response) {
        response.forEach(function(element){
        $('#records').append('<tr>' +
            '<td>'+ element.title + '</td>' +
            '<td>'+ element.artist + '</td>' +
            '<td>' + element.year + '</td>' +
            '<td>' +element.cost + '</td>' +
        '</tr>')
        });
       
    });
}