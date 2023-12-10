import withLoader from "./withLoader";

function DogImages(props) {
  return props.data.map((dog, i) => <img src={dog} key={i} alt="dog image" />);
}

export default withLoader(
  DogImages,
  "https://dog.ceo/api/breed/labrador/images/random/6",
);
