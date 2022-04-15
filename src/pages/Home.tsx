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
    <h1>Status: {props.loggedInStatus}</h1>
    <LogInForm handleSuccessfulAuth={handleSuccessfulAuth} />
    </>
  )
}


