import { w3cwebsocket } from "websocket";
import type { TotalDivision, Selected } from "../types";
import type { IconPrefix, IconName } from "@fortawesome/fontawesome-svg-core";

export const client: w3cwebsocket = new w3cwebsocket(
  "wss://wssx.gntapi.com:443"
);

export const initial: TotalDivision = {
  ask: 0,
  bid: 0,
  prevAsk: 0,
  prevBid: 0,
};

export const DivisionColors: Selected<IconName> = {
  2: "down-long",
  3: "up-down",
};
