import './App.css';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - CHANGE THE NAME VARIABLE TO YOUR NAME - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const name = 'Omar';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - CHANGE THE NAME VARIABLE TO YOUR NAME - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          Hola, mi nombre es {name} <span className="heart">♥️</span> DevOps and React
        </p>
        <p className="small">
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <p className="small">
          Actividad realizada por Carla Rodriguez y Diego Gentner.
        </p>
      </header>
    </div>
  );
}

export default App;
