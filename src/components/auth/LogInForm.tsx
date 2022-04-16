import { Button, TextField } from '@mui/material';
import axios from 'axios';
import { Form, Formik } from 'formik';
import React from 'react';

interface Props {
    handleSuccessfulAuth: any
}

export const LogInForm: React.FC<Props> = (props:any) => {

    const initialValues = {
        email: "admin@fevr.pt",
        password: "password",
        errors: ""
    }
    
    const  handleSubmitForm = (values: { email: string; password: string; errors: string; }) => {
        axios.post("/api/admins", values, {withCredentials: true})
        .then( response => {
            if(response.data.status === 'created') {
                props.handleSuccessfulAuth(response.data)
            }
        })
    }

    return (
      
        <>
            <Formik initialValues={initialValues} onSubmit={values => {
                handleSubmitForm(values);
        }}
        >
            {({values, handleChange}) => (
            <Form>
                <TextField style={{margin: '5px'}} label='Email' name='email' value={values.email} onChange={handleChange} />
                <TextField style={{margin: '5px'}} label='Password' name='password' value={values.password} onChange={handleChange} />
                <Button style={{margin: '15px'}} variant = "contained" type='submit'>Submit</Button>
            </Form>
        )}
        </Formik>
        </>
    );
};
