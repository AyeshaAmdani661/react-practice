import React from 'react';
import PropType from 'prop-types'


// ***** functional component *****

//  function App (props) {
//   return (
//     <div>
//     <h1>{props.num}</h1>
//     <h1>{props.fun1}</h1>
//     </div>
//   )
//  }

// ***** class component *****

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.num}</h1>
//         <h1>{this.props.fun1}</h1>
//       </div>
//     )
//   }
// }

// **** proptype checking ******

// class App extends React.Component {
//   render () {
//     const cityArray = this.props.cityArray

//     const shortListedCities = cityArray.filter(city => city.length > 6)

//     // this.props.myFunction()

//     return (
//       <ul>
//         {shortListedCities.map(city => <li key={city}> {city} </li>)}
//       </ul>
//     )
//   }
// }
// App.propTypes = {
//   cityArray: PropType.array.isRequired
// }

// ***** state in class component ******

// class App extends React.Component {
//   state={
//      cityArray : this.props.cityArray
//   }

//   render () {
//     return (
//       <ul>
//         {this.state.cityArray.map(city => <li key={city}> {city} </li>)}
//       </ul>
//     )
//   }
// }

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      username: "ayesha"
    }
  }
  setName = (e) => {
    this.setState({
      username: e.target.value
    })
  }
  render() {
    return (
      <div>
      <h1>My name is {this.state.username}</h1>
      <input onChange={(e)=>this.setState({username: e.target.value})} type="text" placeholder='enter your name'/>
      <button onClick={this.setName}>set Name</button>

      </div>
    )
  }
}

export default App;
