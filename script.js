function toogleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/light_mode_photo.jpeg")
  } else {
    img.setAttribute("src", "./assets/dark_mode_photo.jpeg")
  }
}
