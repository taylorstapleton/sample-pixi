import * as PIXI from "pixi.js";
const app = new PIXI.Application();

async function test(container) {
  let url = new URL("fish2.png", import.meta.url);
  await PIXI.Assets.load(url);
  let sprite = PIXI.Sprite.from(url);
  container.addChild(sprite);
}

(async () => {
  await app.init({ background: "#2d3338", resizeTo: window });
  document.body.appendChild(app.canvas);
  const container = new PIXI.Container();
  app.stage.addChild(container);
  await test(container);
  console.log("it works");
})();
