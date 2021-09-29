import React from "react";
import "./style.css";
import Arrowfn from './Arrowfn';
import Errorboundary from './Errorboundary';
import Error from './Error'

export default function App() {
  return (
    <div>
      <Error>
     <Errorboundary heroName='batsman' />
     <Errorboundary heroName='superman' />
     <Errorboundary heroName='jokery' />
     </Error>
    </div>
  );
}
