import React, { Component } from 'react';

class PuzzleBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: 0,
            position: props.position
        }
        this.swap = props.swap;
        this.updateClick = props.updateClick;
        // this.imgPath = props.imgPath;
        // this.isDummy = props.isDummy;
        // console.log(props)

        this.handlePuzzleBlockEvent = this.handlePuzzleBlockEvent.bind(this)
    }

    handlePuzzleBlockEvent() {
        
        this.setState({ clicked: this.state.clicked + 1 })

        this.updateClick()
        
        console.log('position : ' + this.state.position +
            // ' clicked : ' + this.state.clicked +
            ' value: ' + this.props.value)
    }

    render() {
        return <li className={'sprite '} onClick={this.handlePuzzleBlockEvent}>{this.props.value}</li>
    }
}
export default PuzzleBlock