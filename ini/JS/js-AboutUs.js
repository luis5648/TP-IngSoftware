function resizeHeaderOnScroll() {
  const distanceY = window.pageYOffset || document.documentElement.scrollTop,
  shrinkOn = 200,
  headerEl = document.getElementById('js-header');

  if (distanceY > shrinkOn) {
    headerEl.classList.add("smaller");
  } else {
    headerEl.classList.remove("smaller");
  }
}

window.addEventListener('scroll', resizeHeaderOnScroll);

function mensajeEmergente(){
alert("\t\t\tATENCIÓN !\nEnlace solo para usuarios registrados !!!");
}

function mensajeTwitt(){
  alert("\t\tTwitter Desactivado :(  !");
}

function mensajeContact(){
  alert("MAIL :all.developers.3nc0d3r5@gmail.com\n");
}
