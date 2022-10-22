import React,{useState} from 'react';
// import PropType from 'prop-types'
// import styled from 'styled-components';
// import img from './images/f1.jpg'

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

// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       username: "ayesha"
//     }
//   }
//   setName = (e) => {
//     this.setState({
//       username: e.target.value
//     })
//   }
//   render() {
//     return (
//       <div>
//       <h1>My name is {this.state.username}</h1>
//       <input onChange={(e)=>this.setState({username: e.target.value})} type="text" placeholder='enter your name'/>
//       <button onClick={this.setName}>set Name</button>

//       </div>
//     )
//   }
// }

// ***** styled component ******

// const Button = styled.button`
//   display:block;
//   background: black;
//   color: white;
//   border-radius: 7px;
//   padding: 10px;
//   margin: 10px;
//   font-size: 16px;
//   :disabled {
//     opacity: 0.4;
//   }
//   :hover {
//     box-shadow: 0 0 5px yellow;
//     background-color: white;
//     color: black;
//   }
// `

// ***** inline, css file & styled component styling ******


// function App(props) {
//   return (
//     <div>
//    <h1 style={{ fontSize: '2rem', color: "blue" }}>I am example of inline css</h1>
//    <button className="btn">I am example of css file styling</button>
//    <Button>I am example of styled component</Button>
//    <img src={img} alt="img" />
//     </div>
//   )
// }


// ***** useState ******

function App(props) {
  const [name, setName] = useState(props.username)
  
    return (
      <div>
        <h1>My name is {name}</h1>
        <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='enter your name'/>
        {/* or */}
        {/* <input id='input' type="text" placeholder='enter your name'/><br /><br />
        <button onClick={()=>setName(document.getElementById('input').value)}>set name</button> */}
      </div>
    )
  }

export default App;
