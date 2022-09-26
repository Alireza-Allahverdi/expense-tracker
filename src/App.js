import './styles/App.scss';
import ExpenseApp from './components/ExpenseApp';

function App() {
  return (
    <div className="App">
      <header>
        <h2>Expense Tracker</h2>
      <hr />
      </header>
      <ExpenseApp />
    </div>
  );
}

export default App;
