class Hello extends React.Component {
  static defaultProps = {
    from: 'Anonymous',
    exclamations: 2
  };
  render() {
    var excl = '!'.repeat(this.props.exclamations);
    return (
      <div>
        <p>
          Hi {this.props.to} from {this.props.from}
          {excl}
        </p>
      </div>
    );
  }
}
