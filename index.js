class App extends React.Component {
  render() {
    return (
      <div>
        <Hello to="Raman" from="Sam" exclamations={4} />
        <Hello to="Alpha" from="Jack" exclamations={10} />
      </div>
    );
  }
}

// function App() {

// }

ReactDOM.render(<App />, document.getElementById('root'));
