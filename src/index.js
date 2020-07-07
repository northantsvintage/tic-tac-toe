import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//   begining of Square class
class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }
    render() {
      return (
        //   <button className="square" onClick={function() { alert('click')}}>
        // using arrow function syntax
        // passing a function as the onClick prop
        <button 
            className="square" 
            onClick={() => this.setState({value: 'X'})}>
          {this.state.value}
        </button>
      );
    }
  } 
//   end of square class

//   beegining of Board class
  class Board extends React.Component {
    renderSquare(i) {
      return <Square value={i} />;
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
//   end od Board Class
  
//   begining of Game class
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  //   end of Game class

  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  