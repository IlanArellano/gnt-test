import React from "react";
import type { TotalDivision, Selected } from "../types";
import { DivisionColors } from "../common";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { Icon } from "./icon";
import styles from "../styles/Home.module.css";

interface Props {
  values: TotalDivision;
}

export function Divisas(props: Props) {
  const Styles: Selected<string> = {
    2: styles.red,
    3: styles.green,
  };

  const getStatus = (state: number, prevState: number): number => {
    if (prevState > state) return 2;

    return 3;
  };

  return (
    <div className={styles.Divisascontainer}>
      <div className={styles.divisas}>
        <span>Ask:</span>
        <div
          className={
            Styles[
              getStatus(
                props.values.ask,
                props.values.prevAsk
              ) as keyof Selected<string>
            ]
          }
        >
          <Icon
            icon={
              DivisionColors[
                getStatus(
                  props.values.ask,
                  props.values.prevAsk
                ) as keyof Selected<IconName>
              ]
            }
          />
          <span>{props.values.ask}</span>
        </div>
      </div>

      <div className={styles.divisas}>
        <span>Bid:</span>
        <div
          className={
            Styles[
              getStatus(
                props.values.bid,
                props.values.prevBid
              ) as keyof Selected<string>
            ]
          }
        >
          <Icon
            icon={
              DivisionColors[
                getStatus(
                  props.values.bid,
                  props.values.prevBid
                ) as keyof Selected<IconName>
              ]
            }
          />
          <span>{props.values.bid}</span>
        </div>
      </div>
    </div>
  );
}
