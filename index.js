const tooglebtn = document.querySelector(".toogle-btn"),
  LockIcon = document.querySelector(".icon i");

tooglebtn.addEventListener("click", () => {
  tooglebtn.classList.toggle("active");

  if (tooglebtn.classList.contains("active")) {
    return LockIcon.classList.replace("bxs-lock-open", "bxs-lock");
  }
  LockIcon.classList.replace("bxs-lock", "bxs-lock-open");
});
