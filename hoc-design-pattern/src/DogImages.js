import withLoader from "./withLoader";
import withHover from "./withHovering";
function DogImages(props) {
  return (
    <div {...props}>
      {props.hover && <div id="hover">Hovering!</div>}
      <div id="list">
        {props.data.map((dog, index) => (
          <img src={dog} alt="Dog" key={index} />
        ))}
      </div>
    </div>
  );
}

export default withHover(
  withLoader(DogImages, "https://dog.ceo/api/breed/labrador/images/random/6"),
);
