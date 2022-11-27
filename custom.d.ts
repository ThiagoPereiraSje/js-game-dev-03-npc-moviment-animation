declare module "*.png" {
  const content: any;
  export default content;
}

declare module "*.module.css";

type GameProps = {
  canvasWidth: number;
  canvasHeigth: number;
  sine: number;
  cosine: number;
  speed: number;
};

declare var gameProps: GameProps;
