const carousel = document.querySelector(".Carousel");
const firstImg = carousel.querySelectorAll("img")[1];
const arrowIcons = document.querySelectorAll(".Carousel i");

let isDragStart = false;
let prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 29;
let scrollWidth = carousel.scrollWidth - carousel.clientWidth;

const showHideIcons = () => {
  if (carousel.scrollLeft === 0) {
    arrowIcons[0].style.display = "none";
  } else {
    arrowIcons[0].style.display = "block";
  }
}
arrowIcons.forEach(function (icon) {
  icon.addEventListener("click", () => {
    if (icon.id === "left") {
      carousel.scrollLeft -= firstImgWidth;
    } else {
      carousel.scrollLeft += firstImgWidth;
    }
    showHideIcons();
  });
});

const dragstart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  carousel.classList.add("dragging");
  let positionDiff = e.pageX - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
  showHideIcons();
};

const dragstop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");
};

carousel.addEventListener("mousedown", dragstart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragstop);



const carousel1 = document.querySelector(".Carousel1");
const firstImg1 = carousel.querySelectorAll("img")[1];
const arrowIcons1 = document.querySelectorAll(".Carousel1 i");

let isDragStart1 = false;
let prevPageX1, prevScrollLeft1;
let firstImgWidth1 = firstImg1.clientWidth + 29;
let scrollWidth1 = carousel1.scrollWidth - carousel1.clientWidth;

const showHideIcons1 = () => {
  if (carousel1.scrollLeft === 0) {
    arrowIcons1[0].style.display = "none";
  } else {
    arrowIcons1[0].style.display = "block";
  }
}
arrowIcons1.forEach(function (icon) {
  icon.addEventListener("click", () => {
    if (icon.id === "left1") {
      carousel1.scrollLeft -= firstImgWidth1;
    } else {
      carousel1.scrollLeft += firstImgWidth1;
    }
    showHideIcons1();
  });
});

const dragstart1 = (e) => {
  isDragStart1 = true;
  prevPageX1 = e.pageX;
  prevScrollLeft1 = carousel1.scrollLeft;
};

const dragging1 = (e) => {
  if (!isDragStart1) return;
  e.preventDefault();
  carousel1.classList.add("dragging");
  let positionDiff = e.pageX - prevPageX1;
  carousel1.scrollLeft = prevScrollLeft1 - positionDiff;
  showHideIcons();
};

const dragstop1 = () => {
  isDragStart1 = false;
  carousel1.classList.remove("dragging");
};

carousel1.addEventListener("mousedown", dragstart);
carousel1.addEventListener("mousemove", dragging);
carousel1.addEventListener("mouseup", dragstop);
