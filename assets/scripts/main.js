function activate(column, parent) {
  parent.querySelector(".active").classList.remove("active");
  column.classList.add("active");
}

function onload() {
  const workouts = document.querySelector("section.workouts");

  if (workouts) {
    const columns = workouts.querySelectorAll(".column");

    for (const column of columns) {
      column.addEventListener("click", () => activate(column, workouts));
    }
  }
}

window.addEventListener("load", onload, { once: true });
