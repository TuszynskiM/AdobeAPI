const input = document.getElementById('inputSearch');
input.addEventListener('input', changeInput)

function changeInput(e) {
    input.name = e.target.value
}