import { useState } from "react";

export default function Input(props) {
  const [data, setData] = useState("");

  return (
    <>
      <input
        type="number"
        value={data}
        placeholder="Temp in °C"
        onChange={(e) => setData(e.target.value)}
      />
      {props.render(data)}
    </>
  );
}
