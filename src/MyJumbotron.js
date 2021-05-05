import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

function MyJumbotron({title}) {
  return (
    <Jumbotron>
      <h1>Hello, world!</h1>
      <p>
       This is the {title} component
      </p>
      <p>
        <Button href="/about" variant="primary">About</Button>
      </p>
    </Jumbotron>
  );
}

export default MyJumbotron;
