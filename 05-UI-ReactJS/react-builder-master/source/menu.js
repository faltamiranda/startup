import React from 'react';
import { Link } from 'react-router';

class Menu extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
      <Link to="/app"><button>Add movies</button></Link>
      <Link to="/list"><button>List movies</button></Link>

      </div>

    ) ;
  }

}


export default Menu
