class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hobby</h1>
        <Friend name="Ross" hobbies={['movies', 'games', 'singing', 'reading']} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
