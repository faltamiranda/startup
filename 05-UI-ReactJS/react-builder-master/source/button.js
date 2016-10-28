import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <input type="button" value={this.props.buttonValue} onClick={this.props.buttonClick} id={this.props.buttonId} />
      </div>
    );
  }
}


export default Button
