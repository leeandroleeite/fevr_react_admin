import React from 'react'
import { AddPlayersForm } from '../components/AddPlayersForm'
import SortingTable from '../components/SortingTable'


export default function Dashboard(props: any) {

  return (
    <>
    <div style={{margin: '5%'}}>
        <AddPlayersForm />
        <br />
        <SortingTable /> 
  </div>
  </>
  )
}
