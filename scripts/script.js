let btnOpenNav = document.querySelector(".btn-open-nav");
let closeNav = document.querySelector(".close-navbar");
let navbar = document.querySelector(".navbar");
let blackOut = document.querySelector(".black-out");
let imageWindow = document.body.querySelector(".image-window");
document.body.addEventListener("click", {
  handleEvent(event) {
    let target = event.target;

    if (target.contains(btnOpenNav)) {
      navbar.classList.add("open-close-nav");
      blackOut.hidden = false;
      return;
    }

    if (
      navbar.classList.contains("open-close-nav") &&
      (target.contains(blackOut) || target.contains(closeNav))
    ) {
      navbar.classList.remove("open-close-nav");
      blackOut.hidden = true;
      return;
    }

    if (target.closest(".navbar")) {
      return;
    }

    if (target.closest(".card-item")) {
      imageWindow.classList.add("none");
      let image = imageWindow.querySelector("img");
      image.setAttribute("src", target.src);
      image.setAttribute("alt", target.alt);
      imageWindow.querySelector("p").innerHTML = target.alt;
      setTimeout(() => {
        image.style.maxWidth = "70%";
      });
    }
    if (target.closest(".image-window")) {
      imageWindow.classList.remove("none");
      imageWindow.querySelector("img").style.maxWidth = "0%";
    }
  },
});
