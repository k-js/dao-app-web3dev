import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0xe72c331F141e63771cF062deD8704d6f176E7a99", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "ecossistema da vida",
        description: "Esse NFT vai te dar acesso ao ecoDAO!",
        image: readFileSync("scripts/assets/eco.jpg"),
      },
    ]);
    console.log("✅ Novo NFT criado com sucesso no drop !");
  } catch (error) {
    console.error("falha ao criar o novo NFT", error);
  }
})()