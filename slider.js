"use: strict";
const sliderImages = document.querySelectorAll(".slide-in");

const checkSlide = function (e) {
  sliderImages.forEach((sliderImage) => {
    //console.log(e);

    const sliderAt =
      window.scrollY + window.innerHeight - (sliderImage.height * 10) / 100;

    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    //console.log(imageBottom);
    //console.log(sliderAt);

    const isImgShown = sliderAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;

    if (isImgShown && isNotScrolledPast) {
      sliderImage.classList.add("active");
    } else {
      sliderImage.classList.remove("active");
    }
  });
};

window.addEventListener("scroll", checkSlide);
