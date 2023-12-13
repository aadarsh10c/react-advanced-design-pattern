import { useState } from "react";

export default function useHover() {
  const [hover, setHover] = useState(false);
  const handleMouseOver = () => setHover(true);
  const handleMouseOut = () => setHover(false);

  return { hover, handleMouseOver, handleMouseOut };
}
