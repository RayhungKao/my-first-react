import React from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


// 路徑 : src/App.js
class Welcome extends React.Component {
  render() {
    return <div>
      <h1>Hello React</h1>
      <h2>My name is Winnie.{this.props.title}</h2>
    </div>
  }
}

class Main extends React.Component {
  render() {
    return <div>
      <Welcome title="fuck you"/>
      <Welcome/>
      <Welcome/>
    </div>
  }
}

export default Main

// export default App;
