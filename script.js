document.addEventListener("DOMContentLoaded", () => {
  const contactButton = document.querySelector(".contact-button");
  const modal = document.getElementById("contact-modal");
  const closeButton = document.querySelector(".close-button");

  let isDragging = false;
  let offsetX, offsetY;

  contactButton.addEventListener("mousedown", (event) => {
    isDragging = true;
    offsetX = event.clientX - contactButton.getBoundingClientRect().left;
    offsetY = event.clientY - contactButton.getBoundingClientRect().top;
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  });

  function onMouseMove(event) {
    if (isDragging) {
      contactButton.style.left = `${event.clientX - offsetX}px`;
      contactButton.style.top = `${event.clientY - offsetY}px`;
    }
  }

  function onMouseUp() {
    isDragging = false;
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  }

  contactButton.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function() {
      if (window.scrollY > 50) { // Adjust the scroll threshold as needed
          navbar.classList.remove("transparent");
      } else {
          navbar.classList.add("transparent");
      }
  });
});



$(document).ready(function () {
  $(window).view(function () {
    if (this.min - width == "992px") {
      $(".offcanvas-body > ul").removeClass(".nav-ul");
      $(".offcanvas-body > ul").addClass(".nav-ul-padding");
    } else {
      $(".offcanvas-body > ul").addClass(".nav-ul");
    }
  });
});

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    // Adjust the scroll threshold as needed
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

document.addEventListener("mousemove", (event) => {
  const image = document.querySelector(".img-right");
  const container = document.querySelector(".welcome-right-container-item");
  const rect = container.getBoundingClientRect();

  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const deltaX = (mouseX - centerX) / centerX;
  const deltaY = (mouseY - centerY) / centerY;

  const maxTranslate = 20; // Maximum translation in pixels

  const translateX = deltaX * maxTranslate;
  const translateY = deltaY * maxTranslate;

  // Combine the animation transform and the mouse movement transform
  image.style.transform = `translate(${translateX}px, ${translateY}px)`;
});
