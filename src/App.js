import React from 'react';
import ReactDOM from 'react-dom';

function Car(props) {
  return <h2>I am at { props.city }!</h2>;
}

function Garage() {
  return (
    <>
	    <h1>Hello everyone</h1>
	    <Car city="Hyderabad" />
    </>
  );
}

ReactDOM.render(<Garage />, document.getElementById('root'));
export default Garage;