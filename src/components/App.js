import React from 'react';
import { useReducer } from 'react';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

import reducer from '../reducers'
import { initialState } from '../reducers';
import { applyNumber, applyOperation, applyClear, applyMemory } from '../actions';

function App() {

  // implement useReducer with exports from our "reducers" folder
  const [state, dispatch] = useReducer(reducer, initialState)
  // confirm state is being set to initialState values
  console.log(state);
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={(e) => dispatch(applyMemory(e.target.value))}/>
              <CalcButton value={"MR"} onClick={(e) => dispatch(applyMemory(e.target.value))}/>
              <CalcButton value={"MC"} onClick={(e) => dispatch(applyMemory(e.target.value))}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={(e) => dispatch(applyNumber(Number(e.target.value)))}/>
              <CalcButton value={2} onClick={(e) => dispatch(applyNumber(Number(e.target.value)))}/>
              <CalcButton value={3} onClick={(e) => dispatch(applyNumber(Number(e.target.value)))}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={(e) => dispatch(applyNumber(Number(e.target.value)))}/>
              <CalcButton value={5} onClick={(e) => dispatch(applyNumber(Number(e.target.value)))}/>
              <CalcButton value={6} onClick={(e) => dispatch(applyNumber(Number(e.target.value)))}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={(e) => dispatch(applyNumber(Number(e.target.value)))}/>
              <CalcButton value={8} onClick={(e) => dispatch(applyNumber(Number(e.target.value)))}/>
              <CalcButton value={9} onClick={(e) => dispatch(applyNumber(Number(e.target.value)))}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={(e) => dispatch(applyOperation(e.target.value))}/>
              <CalcButton value={"*"} onClick={(e) => dispatch(applyOperation(e.target.value))}/>
              <CalcButton value={"-"} onClick={(e) => dispatch(applyOperation(e.target.value))}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={(e) => dispatch(applyClear())}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
