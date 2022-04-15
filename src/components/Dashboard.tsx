import React from 'react'
import { AddPlayersForm } from './AddPlayersForm'
import SortingTable from './SortingTable'

export default function Dashboard() {
  return (
    <>
    <div>Dashboard</div>
    <div style={{margin: '5%'}}>
        <AddPlayersForm />
        <br />
        <SortingTable /> 
  </div>
  </>
  )
}
