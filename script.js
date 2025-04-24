// Salva e restaura o estado dos checkboxes usando localStorage
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach((checkbox, index) => {
  // Carrega o estado salvo
  const saved = localStorage.getItem(`tarefa-${index}`);
  if (saved === "true") {
    checkbox.checked = true;
  }

  // Salva o estado quando mudar
  checkbox.addEventListener('change', () => {
    localStorage.setItem(`tarefa-${index}`, checkbox.checked);
  });
});
