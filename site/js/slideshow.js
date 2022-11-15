var slides = document.querySelectorAll("#slides > img");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

let currentFunc = (()=> {
  let current = 0;
  return {
    getCurrent() {
      return current;
    },

    addCurrent(slidesSize) {
      current = (current+1) % slidesSize;
      return current;
    },

    subCurrent(slidesSize) {
      current = (current+slidesSize-1) % slidesSize;
      return current;
    }
  }
})();


function initSlides(n) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[n].style.display = "block";
}

  function showSlides(noneIdx, blockIdx) {
    slides[noneIdx].style.display = "none";
    slides[blockIdx].style.display = "block";
  }


  initSlides(currentFunc.getCurrent());
  prev.onclick = () => {
    showSlides(currentFunc.getCurrent(),
        currentFunc.subCurrent(slides.length));
};

next.onclick = () => {
  showSlides(currentFunc.getCurrent(),
               currentFunc.addCurrent(slides.length));
}
