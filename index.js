class App extends React.Component {
  render() {
    return (
      <div>
        <Hello to="Raman" from="Sam" />
        <Hello to="Alpha" exclamations={10} />
      </div>
    );
  }
}

// function App() {

// }

ReactDOM.render(<App />, document.getElementById('root'));
