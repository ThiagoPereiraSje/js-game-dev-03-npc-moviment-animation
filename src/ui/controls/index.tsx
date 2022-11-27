import styles from "./index.module.css";

export function controls() {
  const element = document.createElement("div");
  element.className = styles.controls;

  element.innerHTML = /* html */ `
    <div>
      <label htmlFor="inputSine">Seno:</label>
      <input id="inputSine" type="number" min="0" step="5" value="${gameProps.sine}" />
    </div>
  
    <div>
      <label htmlFor="inputCosine">Cosseno:</label>
      <input id="inputCosine" type="number" min="0" step="5" value="${gameProps.cosine}" />
    </div>

    <div>
      <label htmlFor="inputSpeed">Velocidade:</label>
      <input id="inputSpeed" type="number" step="0.1" min="-50" max="50" value="${gameProps.speed}" />
    </div>
  `;

  const inputSine = element.querySelector("#inputSine") as HTMLInputElement;
  const inputCosine = element.querySelector("#inputCosine") as HTMLInputElement;
  const inputSpeed = element.querySelector("#inputSpeed") as HTMLInputElement;

  inputSine.addEventListener("change", (e: any) => {
    gameProps.sine = Number(e.target.value);
  });

  inputCosine.addEventListener("change", (e: any) => {
    gameProps.cosine = Number(e.target.value);
  });

  inputSpeed.addEventListener("change", (e: any) => {
    gameProps.speed = Number(e.target.value);
  });

  return element;
}
