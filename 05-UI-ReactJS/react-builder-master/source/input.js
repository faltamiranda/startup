import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <input type={this.props.inputType} defaultValue={this.props.inputValue} id={this.props.inputId} placeholder={this.props.inputHolder} />
      </div>
    );
  }
}


export default Input
