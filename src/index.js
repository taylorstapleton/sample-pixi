import * as PIXI from "pixi.js";
const app = new PIXI.Application();

require("fish2.png");

async function test(container) {
  await PIXI.Assets.load("fish2.png");
  let sprite = PIXI.Sprite.from("fish2.png");
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
