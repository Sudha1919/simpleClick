import React from "react";
import "./style.css";
import Arrowfn from './Arrowfn';
import Errorboundary from './Errorboundary';
import Error from './Error'

export default function App() {
  return (
    <div>
      <Error>
     <Errorboundary heroName='batsman' /></Error>
     <Error> <Errorboundary heroName='superman' /></Error>
     <Error><Errorboundary heroName='joker' /></Error>
     
    </div>
  );
}
