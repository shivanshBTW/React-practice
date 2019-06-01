class Machine extends React.Component {
  render() {
    var result = this.props.m1 === this.props.m2 && this.props.m1 === this.props.m3;
    var color = { backgroundColor: 'purple', fontSize: '50px' };
    return (
      <div className="Machine">
        <p style={color}>
          {this.props.m1} {this.props.m2} {this.props.m3}
        </p>
        <p className={result ? 'Machine-winner' : 'Machine-loser'}>
          {result ? 'You Win!' : 'You Lose!'}
        </p>
      </div>
    );
  }
}
