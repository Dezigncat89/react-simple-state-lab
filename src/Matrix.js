import React, { Component } from 'react';

export default class Matrix extends Component {
  
  constructor() {
    super()
    this.state = {
      color: 'red'
    }
  }

  handleChangeColor = (newColor) => {
    this.setState({
      color: newColor
    })
  }

  componentDidMount() {
    this.timer = setTimeout(
      () => this.handleChangeColor('blue'),
      1000*3
    )
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  render() {
    return (
      <div style={ { background: this.state.color} }>
        Color Div
      </div>
    )
  }
}
