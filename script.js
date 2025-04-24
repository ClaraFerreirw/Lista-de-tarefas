document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll("input[type='checkbox']");

  checkboxes.forEach((checkbox, index) => {
    const key = `checkbox-${index}`;
    const saved = localStorage.getItem(key);

    if (saved === "true") {
      checkbox.checked = true;
    }

    checkbox.addEventListener("change", () => {
      localStorage.setItem(key, checkbox.checked);
    });
  });
});
