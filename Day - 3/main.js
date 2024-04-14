let inputs = document.querySelectorAll(".main input");
// console.log(inputs);
function result() {
  let suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach((input) => input.addEventListener("change", result));
inputs.forEach((input) => input.addEventListener("mousemove", result));
