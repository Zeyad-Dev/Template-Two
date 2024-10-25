let searchBtn = document.querySelector("header .container nav .form i");
let form = document.querySelector("header .container nav .form");
let searchBar = document.querySelector("header .container nav .form input");
let links = document.querySelectorAll("header .container nav ul li a");
let bars = document.querySelector("header .container nav i");
let list = document.querySelector("header .container nav ul");
let right = document.querySelector(".landing .overlay .right");
let left = document.querySelector(".landing .overlay .left");
let bulltes = document.querySelectorAll(".landing .overlay .bulltes li");
let landing = document.querySelector(".landing");
let cat = document.querySelectorAll(".portfolio .container ul li");
let imgsContainer = document.querySelector(".portfolio .imgs-container");
let imgs = document.querySelectorAll(".portfolio .imgs-container .box");
let changerComment = document.querySelectorAll(
  ".our-skills .container .testimonianls ul li"
);
let myPhotos = ["background1.jpg", "background2.jpeg", "background3.jpg"];
let comments = [
  "comment1.jpg",
  "comment2.jpg",
  "comment3.jpg",
  "comment4.jpg",
  "comment5.jpg",
  "comment6.jpg",
];
commentContainer = document.querySelectorAll(
  ".our-skills .container .testimonianls .text .main-content .content img"
);
let currentPrice = document.querySelectorAll(
  ".pricing .container .pricing-content .box"
);
let input = document.querySelector(".subscribe .container .form #email");
let label = document.querySelector(".subscribe .container .form label");

let btn = document.querySelector(".subscribe .container .form #email + input");
let current = 1;
window.onresize = function () {
  if (window.innerWidth <= 499) {
    list.classList.remove("active");
    searchBar.classList.remove("active");
  }
};
searchBtn.onclick = () => {
  if (window.innerWidth <= 499) {
    list.classList.remove("active");
  }
  searchBar.classList.toggle("active");
  if (searchBar.classList.contains("active")) {
    form.style.borderLeftColor = "transparent";
    searchBar.focus();
  } else {
    form.style.borderLeftColor = "#ddd";
  }
};
links.forEach((a) => {
  a.onclick = function () {
    links.forEach((a) => {
      a.classList.remove("active");
    });
    a.classList.add("active");
  };
});
bars.onclick = () => {
  if (window.innerWidth <= 499) {
    searchBar.classList.remove("active");
  }
  list.classList.toggle("active");
};

right.onclick = () => {
  current++;
  changeBackground();
};
left.onclick = () => {
  current--;
  changeBackground();
};

function changeBackground() {
  if (current === 3) {
    current = 0;
  }
  if (current === -1) {
    current = 2;
  }
  landing.style.backgroundImage = `url('../images/${myPhotos[current]}')`;
  bulltes.forEach((li) => {
    li.classList.remove("active");
  });
  bulltes[current].classList.add("active");
}
bulltes.forEach((li) => {
  li.onclick = () => {
    bulltes.forEach((li) => {
      li.classList.remove("active");
    });
    li.classList.add("active");
    landing.style.backgroundImage = `url('../images/${
      myPhotos[+li.dataset.num]
    }')`;
  };
});
cat.forEach((li) => {
  li.onclick = () => {
    cat.forEach((li) => {
      li.classList.remove("active");
    });
    li.classList.add("active");
    imgsContainer.innerHTML = "";
    if (li.textContent === "All") {
      imgs.forEach((img) => {
        imgsContainer.appendChild(img);
      });
    } else if (li.textContent === "App") {
      imgs.forEach((img) => {
        if (img.dataset.type === "app") imgsContainer.appendChild(img);
      });
    } else if (li.textContent === "Photo") {
      imgs.forEach((img) => {
        if (img.dataset.type === "photo") imgsContainer.appendChild(img);
      });
    } else if (li.textContent === "Web") {
      imgs.forEach((img) => {
        if (img.dataset.type === "web") imgsContainer.appendChild(img);
      });
    } else if (li.textContent === "Print") {
      imgs.forEach((img) => {
        if (img.dataset.type === "print") imgsContainer.appendChild(img);
      });
    }
  };
});
changerComment.forEach((bullte) => {
  bullte.onclick = () => {
    changerComment.forEach((Comment) => {
      Comment.classList.remove("active");
    });
    bullte.classList.add("active");
    console.log(+bullte.dataset.num);
    commentContainer[0].src = `images/${comments[+bullte.dataset.num]}`;
    commentContainer[1].src = `images/${comments[+bullte.dataset.num + 1]}`;
  };
});
currentPrice.forEach((p) => {
  p.onclick = () => {
    currentPrice.forEach((p) => {
      p.classList.remove("active");
    });
    p.classList.add("active");
  };
});
input.onfocus = () => {
  label.classList.add("active");
};
input.onblur = () => {
  if (input.value === "") label.classList.remove("active");
  label.textContent = "Your mail";
};
btn.onclick = () => {
  if (input.value === "") {
    label.textContent = "Please Write Your Email";
    label.classList.add("active");
  } else {
    input.value = "";
    label.classList.remove("active");
  }
};
