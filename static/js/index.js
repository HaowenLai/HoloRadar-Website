// Smooth in page jump
document.addEventListener("click", function (e) {
  const link = e.target.closest(".jump-in-page");
  if (!link) return;

  e.preventDefault();

  const id = link.dataset.target;
  const target = document.getElementById(id);

  if (target) {
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    history.pushState(null, "", "#" + id);
  }
});
