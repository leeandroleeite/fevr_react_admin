import React from 'react';
import './App.css';
import { AddPlayersForm } from './components/AddPlayersForm';
import SortingTable from './components/SortingTable';


function App() {
  return (
  <>
  <div style={{margin: '5%'}}>
  <AddPlayersForm />
    <br />
    <SortingTable /> 
  </div>
  </>
 );
}
export default App;
