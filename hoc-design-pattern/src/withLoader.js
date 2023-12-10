import { useEffect, useState } from "react";

export default function withLoader(Element, url) {
  return (props) => {
    const [data, setData] = useState(null);

    useEffect(() => {
      async function getData(url) {
        const res = await fetch(url);
        const result = await res.json();
        setData(result.message);
      }
      getData(url);
    }, []);

    if (!data) {
      return <p>Loading ...</p>;
    }

    return <Element {...props} data={data} />;
  };
}
