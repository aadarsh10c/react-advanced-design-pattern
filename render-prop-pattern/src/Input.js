import { useState } from "react";

export default function Input(props) {
  const [data, setData] = useState(0);

  return (
    <>
      <input
        placeholder="Temp in °C"
        value={data}
        oonChange={(e) => setData(e.target.value)}
      />
      {props.render(data)}
    </>
  );
}
