import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
// import BasicTextFields from './components/form.jsx'

// const cityArray1 = ['Karachi', 'Lahore', 'Peshawar', 'Quetta']
// const cityArray2 = ['Hyderabad', 'Islamabad', 'Sawat', 'Gawader']


// const cityObj = {city1:'Hyderabad', city2:'Islamabad',city3: 'Sawat'}

// const myFunction = () => alert('Hello World')


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App cityArray={cityObj} myFunction={myFunction} />   ---> propTypes */}
    {/* 
    <App cityArray={cityArray1} myFunction={myFunction} />
    <App cityArray={cityArray2} myFunction={myFunction} /> */}

    <App username='Ayesha'/>


    {/* <BasicTextFields /> */}

  </React.StrictMode>
);
