
console.log('JAVA JIVE');

$(document).ready(onReady);



function onReady() {
    console.log('jQuery is up and running');
    $('#newSong').on('click', addNew);
    getAllsongs();
}

function getAllsongs(){//append record collection to the dom
    $.ajax({
        type: 'GET', //"method" would be the same in jQuery
        url: '/record'
    })
    .then(function(response) {
        $('#records').empty();
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
    function addNew (){
        const newSong = {
        title : $('#newTitle').val(),
        artist: $('#newArtist').val(),
        year : $('#newYear').val(),
        cost: $('#newCost').val(),
        };
        console.log('New song object', newSong);
        $.ajax({
            method: 'POST',
            url: '/record',
            data: newSong
        })
        .then(function(response){
            console.log(response);
            getAllsongs();
        });
    }