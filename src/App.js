import './App.css';

function App() {
  const firstName = "Fauzan ";
  const lastName = "Rizkyana Gunawan";
  const pengurusOxigen = ["Ahmad Muji B", "Rifqi Rifaldi", "Angga Saeful", "Hendra", "Nada Ika Sari"];
  return (
    <div className="App">
      <h1>{firstName + lastName}</h1>
      {pengurusOxigen.map((e) => {
        return (
          <ul>
            <li>{e}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default App;
