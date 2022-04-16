import { margin } from '@mui/system';
import React from 'react'
import { LogInForm } from '../components/auth/LogInForm'


export default function Home(props: any) {

    const handleSuccessfulAuth = (data: any) => {
        props.handleLogin(data);
        props.history.push("/dashboard");
        window.location.reload()
    }

  return (
    <>
    <div style={{display: 'flex', alignContent: 'center', justifyContent: 'center', margin: '2%'}}>
      <div >
    <h1>LogIn</h1>
    </div>

    <div style={{display: 'flex', alignContent: 'center', justifyContent: 'center'}}>
        <LogInForm handleSuccessfulAuth={handleSuccessfulAuth} />
    </div>
    </div>

   
    
    </>
  )
}


