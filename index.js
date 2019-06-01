class App extends React.Component {
  render() {
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    var s1 = getRandomInt(3);
    var s2 = getRandomInt(3);
    var s3 = getRandomInt(3);

    return (
      <div>
        <h1>Slot Machine</h1>
        <Machine m1={s1} m2={s2} m3={s3} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
