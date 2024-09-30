import * as PIXI from "pixi.js";
const app = new PIXI.Application();

import foo from "../assets/fish2.png";
console.log(foo);

async function test(container) {
  await PIXI.Assets.load(foo);
  let sprite = PIXI.Sprite.from(foo);
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
