import Feed from "./components/Feed";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="div">
          <h1> Rendering a SuperHero Json Data </h1>
        </div>
      </div>
      <div className="data">
        <Feed />
      </div>
    </div>
  );
}

export default App;
