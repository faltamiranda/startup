import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <input type={this.props.inputType} defaultChecked={this.props.inputCheck} defaultValue={this.props.inputValue} className={this.props.class} id={this.props.inputId} placeholder={this.props.inputHolder} />
      </div>
    );
  }
}


export default Input
