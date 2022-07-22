import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconPrefix, IconName } from "@fortawesome/fontawesome-svg-core";

const defaultPrefix: IconPrefix = "fas";

interface Props {
  prefix?: IconPrefix;
  icon: IconName;
  className?: string;
}

/** Dibuja un icono de FontAwesome */
export function Icon(props: Props) {
  return (
    <FontAwesomeIcon
      className={props.className}
      icon={[props.prefix ?? defaultPrefix, props.icon]}
    />
  );
}
