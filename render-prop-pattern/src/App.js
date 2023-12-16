import "./App.css";
import Input from "./Input";

function App() {
  return (
    <div className="App">
      <h1>☃️ Temperature Converter 🌞</h1>
      <Input
        render={(data) => (
          <>
            <Kelvin data={data} />
            <Fahrenheit data={data} />
          </>
        )}
      />
    </div>
  );
}

function Kelvin({ data }) {
  return <div className="temp">{parseInt(data || 0) + 273.15}K</div>;
}

function Fahrenheit({ data }) {
  return <div className="temp">{(parseInt(data || 0) * 9) / 5 + 32}°F</div>;
}
export default App;
