import withLoader from "./withLoader";
import useHover from "./useHover";
function DogImages(props) {
  const { hover, handleMouseOver, handleMouseOut } = useHover();
  return (
    <div {...props}>
      {hover && <div id="hover">Hovering!</div>}
      <div
        id="list"
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseOut}
      >
        {props.data.map((dog, index) => (
          <img src={dog} alt="Dog" key={index} />
        ))}
      </div>
    </div>
  );
}

export default withLoader(
  DogImages,
  "https://dog.ceo/api/breed/labrador/images/random/6",
);
