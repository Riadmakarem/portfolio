export function hoverChangeDescription(nameCard, techName, text) {
  var changeDescription = document.querySelector(".changeDescription");

  document.querySelector(nameCard).addEventListener("mouseover", () => {
    changeDescription.innerHTML = `<strong>${techName}</strong><br>${text}`;
  });

  document.querySelector(nameCard).addEventListener("mouseout", () => {
    changeDescription.innerHTML = `*passe o cursor do mouse no card para ler*`;
  });
}
