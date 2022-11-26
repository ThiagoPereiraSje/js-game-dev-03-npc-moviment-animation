import styles from "./index.module.css";

export function controls() {
  const element = document.createElement("div");
  element.className = styles.controls;

  element.innerHTML = /* html */ `
    <div>
      <label htmlFor="inputSine">Seno:</label>
      <input id="inputSine" type="number" min="15" step="15" value="${gameProps.sine}" />
    </div>
  
    <div>
      <label htmlFor="inputCosine">Cosseno:</label>
      <input id="inputCosine" type="number" min="15" step="15" value="${gameProps.cosine}" />
    </div>
  `;

  const inputSine = element.querySelector("#inputSine") as HTMLInputElement;
  inputSine.addEventListener("change", (e: any) => {
    gameProps.sine = Number(e.target.value);
  });

  return element;
}
