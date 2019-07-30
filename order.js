const qs = decodeURIComponent(window.location.search);
queryString = qs.split('&');
const id = queryString[0].slice(1);
const link = queryString[1];

const divImg = document.getElementById('div_image');
const img = document.createElement('img');
img.src = link;
img.id = 'photo';
img.alt = "[Jcrop Example]";
divImg.appendChild(img);

const inputImg = document.getElementById('selectImage');
inputImg.value = link;

const idAdobe = document.getElementById("idAdobe");
idAdobe.value = id;