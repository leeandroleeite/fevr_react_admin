import { Button, TextField } from '@mui/material';
import { Form, Formik } from 'formik';
import React from 'react';

const initialValues = {
    email: "admin@fevr.pt",
    password: "password",
    password_confirmation: "password",
    errors: ""

}

const  handleSubmitForm = (values: { email: string; password: string; password_confirmation: string; errors: string; }) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
    };
    fetch('/api/registrations', requestOptions)
        .then(response => response.json());

}

export const SignInForm: React.FC = () => {
    return (
      
        <>
            <h1>SignIn</h1>

            <Formik initialValues={initialValues} onSubmit={values => {
                handleSubmitForm(values);
        }}
        >
            {({values, handleChange}) => (
            <Form>
                <TextField style={{margin: '5px'}} label='Email' name='email' value={values.email} onChange={handleChange} />
                <TextField style={{margin: '5px'}} label='Password' name='password' value={values.password} onChange={handleChange} />
                <TextField style={{margin: '5px'}} label='Password confirmation' name='password_confirmation' value={values.password} onChange={handleChange} />
                <Button style={{margin: '15px'}} variant = "contained" type='submit'>Submit</Button>
            </Form>
        )}
        </Formik>
        </>
    );
};
