import React, { Component } from 'react';

import PuzzleBlock from './PuzzleBlock';

class ContainerV2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            totalClick: 0,
            // dummyIndex: 0,
            win: false
        }

        this.totalItem = this.props.totalItem
        this.collections = this.createItem(this.totalItem)

        this.handleSwap = this.handleSwap.bind(this)
        // console.log(this)
    }

    createItem(item) {
        let result = [];
        for (let i = 0; i < item; i++) {
            const isDummy = ((i + 1) === item)
            // if (isDummy) {
            //     this.setState({ dummyIndex: i })
            // }
            result.push(<PuzzleBlock key={i} position={i} value={i} isDummy={isDummy} swap={this.handleSwap} updateClick={this.handleUpdateTotalClick} />)
        }
        return result;
    }

    handleUpdateTotalClick = () => {
        this.setState({ totalClick: this.state.totalClick + 1 })
        // console.log('container total click : ' + this.state.totalClick)
    }

    shouldComponentUpdate(nextProps, nextState) {
        
        console.log('shouldComponentUpdate');
        return nextState.count !== this.state.count;
    }

    handleSwap() {
        console.log('handle swap: ')
        console.log(this)
    }

    render() {

        return <div><h2> puzzle container v2</h2>
            <ul>{this.collections}</ul>
            <div>total click :  {this.state.totalClick} </div>
            <div>last click :   </div>
            {/*<div>dummyIndex : {this.state.dummyIndex} </div>*/}
            <div>winning :  {this.state.win ? 'you win' : ''} </div>
        </div>
    }
}

export default ContainerV2