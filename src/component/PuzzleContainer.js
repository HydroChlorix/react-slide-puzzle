import React, { Component } from 'react';


export default class PuzzleContainer extends Component {
    constructor(param) {
        super();
        this.collection = param.item.map(n => GetItem(n));
    }

    render() {
        return (<ul>{this.collection}</ul>);
    }
}

function GetItem(index) {
    return <li key={index} className={index} >
        <span>{index}</span>
    </li>;
};

// class ImageBlock {
//     constructor() {
//         this.value;
//         this.imgPath;
//         this.isDummy;
//     }
// }
