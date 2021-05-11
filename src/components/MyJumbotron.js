import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

function MyJumbotron(props) {
  return (
    <Jumbotron>
      <h1>{props.title}</h1>
      <p>
       {props.subTitle}
      </p>
      <p>
        <Button href={props.btnLink} variant="primary">{props.btnText}</Button>
      </p>
    </Jumbotron>
  );
}

export default MyJumbotron;
