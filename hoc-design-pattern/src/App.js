import DogImages from "./DogImages";

function App() {
  return (
    <div>
      <h1>
        Browse Dog Images{" "}
        <span role="img" aria-label="emoji">
          🐕
        </span>
      </h1>
      <DogImages />
    </div>
  );
}

export default App;
