const content = document.querySelectorAll("p");
const classes = ["success", "error"];
classes.forEach((cls) => {
  content.forEach((tag) => {
    if (tag.innerText.includes(cls)) {
      tag.classList.add(cls);
    }
  });
});
