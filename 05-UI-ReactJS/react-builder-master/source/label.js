import React from 'react';

class Label extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <label>{this.props.value}</label>
      </div>
    );
  }
}

export default Label
