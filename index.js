const button = document.getElementById("clk");
button.addEventListener("click", function () {
  button.remove();
});

const picture = document.createElement("img");
picture.src = "https://picsum.photos/1400/800";

picture.setAttribute("alt", "profile");
picture.setAttribute("width", "300");
picture.setAttribute("height", "300");

const userProfile = document.getElementById("user");
userProfile.appendChild(picture);
