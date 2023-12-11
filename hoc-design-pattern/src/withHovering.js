import { useState } from "react";

export default function withHover(Element) {
  return (props) => {
    const [hover, setHover] = useState(false);
    return (
      <Element
        {...props}
        hover={hover}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />
    );
  };
}
