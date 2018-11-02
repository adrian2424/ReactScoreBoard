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
  console.log(props);
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
      {props.name}
      </span>

      <Counter score = {props.score}/>
  </div>
  );

}

const Counter = (props) => {
  return (
    <div className = "counter">
        <button className = "counter-action decrement"> - </button>
        <span className = "counter-score">{props.score}</span>
        <button className = "counter-action increment"> + </button>
    </div>

  );

}
const App = () => {
  return (
  <div className = "scoreboard">
    <Header title= "Scoreboard" totalPlayers ={1}/>
    {/*Players list*/}
    <Player name = "Guil" score = {50}/>
    <Player name = "Adrian" score = {91}/>
    <Player name = "Edgar" score = {45}/>
    <Player name = "Amanj" score = {42}/>
    <Player name = "Dede" score = {13}/>
    <Player name = "Dede2" score = {113}/>
  </div>


);

}
ReactDOM.render(
  <App />,
  document.getElementById('root')

);
