import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import PuzzleContainer from './component/PuzzleContainer';
import ContainerV2 from './component/ContainerV2';
import './index.css';
import './component/PuzzleContainer.css';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <PuzzleContainer item={[0,1,2,3,4,5,6,7,8]} />,
//   document.getElementById('puzzle-container')
// );


ReactDOM.render(
  <ContainerV2 totalItem={9}/>,
  document.getElementById('ContainerV2')
);

