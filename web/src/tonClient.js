import TonWeb from "tonweb";

const mainnet = new TonWeb(
  new TonWeb.HttpProvider("https://toncenter.com/api/v2/jsonRPC", {
    // apiKey: "YOUR_MAINNET_TONCENTER_API_KEY",
  })
);
const testnet = new TonWeb(
  new TonWeb.HttpProvider("https://testnet.toncenter.com/api/v2/jsonRPC", {
    // apiKey: "YOUR_TESTNET_TONCENTER_API_KEY",
  })
);

export default { mainnet, testnet };
