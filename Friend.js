class Friend extends React.Component {
  render() {
    const { name, hobbies } = this.props;
    return (
      <div>
        <h2>{name}</h2>
        <ul>
          {hobbies.map(hobby => (
            <li>{hobby}</li>
          ))}
        </ul>
      </div>
    );
  }
}
