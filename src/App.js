import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <MyForm user={{name: "Josias", email: "josias@gmail.com", bio: "Advogado", role: "admin"}}/>
    </div>
  );
}

export default App;
