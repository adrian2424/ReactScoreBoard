/// pass 3 argument
// const title = ' My First React Element ! ' ;
// const desc = 'I just learned how to create a React node and render it  into the DOM ' ;
// const myTitleID  = 'main-title';
// const name = 'Guil';
// // React.createElement(
// //   'h1',
// //   /// if u want to pass empty {}  or null
// //   { id: 'main-title', title: 'This is a title.'},
// //   'My First React Element!'
// //
// // );
//
// const header = (
//   <header>
//   <h1 id = {myTitleID}> { name }'s First React Element!</h1>
//
//   <p> { desc }</p>
//   <input value = {10 * 20}/>
//
//
//   </header>
//
// );


const Header = (props) => {

  return (
      <header>
        <h1> {props.title }</h1>
        <span className="stats">Players: {props.totalPlayers} </span>
      </header>
  );
}
const Player = (props) => {
  return (
    <div className = "player ">
      <span className = "player-name">
    <button className="remove-player" onClick={ ()=> props.removePlayer(props.id)}>✖</button>
      {props.name}
      </span>

      <Counter />
  </div>
  );

}
{/*Changing States functions*/}
class Counter extends React.Component{
  state = {
      score: 0
  };
  incrementScore = () =>{
    this.setState( prevState =>({
          score: prevState.score + 1
    }));
  }


    decrementScore = () =>{
      this.setState( prevState =>({
          score: this.state.score - 1
      }));
    }

  render(){
    return (
      <div className = "counter">
          <button className = "counter-action decrement" onClick ={this.decrementScore}> - </button>
          <span className = "counter-score">{ this.state.score}</span>
          <button className = "counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    );

  }
}
class App extends React.Component  {
  state = {
    players: [
              {
              name: "Guil",
              id: 1
              },
              {
              name: "Treasure",
              id: 2
              },
              {
              name: "Ashley",
              id : 3
              },
              {
              name: "James",
              id : 4
              }
      ]
  };

  handleRemovePlayer = (id) => {
    this.setState( prevState =>{
      return{
        players: prevState.players.filter( p => p.id !== id )
      };
    });

  }
  render(){
    return (
    <div className = "scoreboard">
      <Header
      title= "Scoreboard"
      totalPlayers ={this.state.players.length}
      />

      {/*Players list*/}

      {this.state.players.map ( player =>
        <Player
          name = {player.name}
          id={player.id}
          score = {player.score}
          key = {player.id.toString()}
          removePlayer = {this.handleRemovePlayer}
        />
      )}
    </div>
);
}
}


ReactDOM.render(
  <App />,
  document.getElementById('root')

);
