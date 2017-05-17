import React, { Component } from 'react';

export default class PuzzleContainer extends Component {
    constructor(props) {
        super();
        this.collection = props.item.map((n , i) => GetItem(n , i));
    }

    render() {
        return <ul>{this.collection}</ul>;
    }
}

function GetItem(value , index) {
    return <li key={index} className={value} >
        <span>{value}</span>
    </li>;
};

// class ImageBlock {
//     constructor() {
//         this.value;
//         this.imgPath;
//         this.isDummy;
//     }
// }
