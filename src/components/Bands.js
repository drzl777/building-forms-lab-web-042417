import React, { Component } from 'react';

class Bands extends Component {


  render(){
    const bandsList = this.props.store.getState().bands.map(b => <li>{b}</li> )
    
    return (
      <div>
        <ul>
          {bandsList}
        </ul>
      </div>
    );
  }
};

export default Bands;
