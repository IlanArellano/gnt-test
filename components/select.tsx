import React, { ChangeEvent } from "react";
import { Options } from "../types";
import styles from "../styles/Home.module.css";

interface Props {
  name: string;
  items: Options[];
  setState?: (state: any) => void;
  onChange?: (value: string) => void;
  label?: string;
  defaultValue?: any;
}

export function Select(props: Props) {
  const onChange = (evt: ChangeEvent<HTMLSelectElement>) => {
    if (props.onChange !== undefined) props.onChange(evt.target.value);
  };

  return (
    <div className={styles.select}>
      {props.label && <label>{props.label}</label>}
      <select name={props.name} onChange={onChange}>
        <option selected>{props.defaultValue}</option>
        {props.items?.map((x, i) => (
          <option key={i} value={x.value}>
            {x.label}
          </option>
        ))}
      </select>
    </div>
  );
}
