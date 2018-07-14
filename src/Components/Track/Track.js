import React from 'react';

class Track extends React.Component {
  constructor(props) {
    super(props)

    this.addTrack = this.addTrack.bind(this)
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3> {this.props.track.name} </h3>
          <p> {this.props.track.artist} | {this.props.track.album} </p>
        </div>
        <a className="Track-action"> + or - will go here </a>
      </div>
    )
  }

  addTrack(){
  this.props.onAdd(this.props.track);
}

  renderAction() {
    if (this.props.isRemoval) {
      return <a className="Track-action">-</a>
    } else {
      return <a className="Track-action" onClick={this.addTrack}>+</a>
    }

  }
}

export default Track;
