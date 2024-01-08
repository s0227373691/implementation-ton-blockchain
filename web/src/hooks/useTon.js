import { useEffect } from "react";
import { useState } from "react";
import TonWeb from "tonweb";

const mainnetURL = "https://toncenter.com/api/v2/jsonRPC";
const testnetURL = "https://testnet.toncenter.com/api/v2/jsonRPC";

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

export const network = {
  MAINNET: "MAINNET",
  TESTNET: "TESTNET",
};

const useTon = (_network) => {
  const [instance, setInstance] = useState(null);
  useEffect(() => {
    let httpProvider = "";
    if (_network === network.MAINNET)
      httpProvider = new TonWeb.HttpProvider(mainnetURL, {});
    if (_network === network.TESTNET)
      httpProvider = new TonWeb.HttpProvider(testnetURL, {});

    setInstance(new TonWeb(httpProvider));
  }, []);
  return instance;
};

export default useTon;
