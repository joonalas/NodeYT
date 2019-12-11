
const baseurl = 'http://localhost:1337/';

function stream() {
    var audio = document.getElementById('audio');
    var id_input = document.getElementById('id-input');
    console.log(baseurl + id_input.value);
    audio.src = baseurl + id_input.value;
}
