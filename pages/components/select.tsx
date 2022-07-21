import React, { ChangeEvent } from "react";
import { Options } from "../../types";

interface Props {
  name: string;
  items: Options[];
  setState: (state: any) => void;
  onChange?: (value: any) => void;
}

export function Select(props: Props) {
  const onChange = (evt: ChangeEvent<HTMLSelectElement>) => {
    if (props.onChange !== undefined) props.onChange(evt.target.value);

    console.log({ event: evt });
  };

  return (
    <select name={props.name} onChange={onChange}>
      {props.items?.map((x, i) => (
        <option key={i} value={x.value}>
          {x.label}
        </option>
      ))}
    </select>
  );
}
