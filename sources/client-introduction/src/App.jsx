// import logo from './logo.svg';
// import "./App.css";
import CustomHeader from "./components/CustomHeader";
import CustomFooter from "./components/CustomFooter";
import SectionIncrement from "./components/SectionIncrement";
import SectionForm from "./components/SectionForm";
import DataTable from "./components/DataTable";

// Class Component
// class App extends React.Component {
// }

// Functional Component (v16.8)
function App() {
  const externalButtonOnClickHandler = () => {
    console.log("Hello world");
  };

  return (
    <div className="App" style={{ padding: "4em" }}>
      {/* How to props? */}
      <CustomHeader nama="Someone" fnOnClick={externalButtonOnClickHandler} />
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <SectionIncrement />

      <SectionForm />

      <DataTable />

      {/* Panggil si CustomFooter layaknya HTML Biasa */}
      <CustomFooter />
    </div>
  );
}

export default App;
