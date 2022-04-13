import { Button, TextField } from '@mui/material'
import { Form, Formik } from 'formik'
import React from 'react'


const initialValues = {
    name: "Bruno Fernandes",
    number: 10,
    nationality: "PT",
    age:25,
    position: "MC",
}

function onSubmit(values: { name: string; number: number; nationality: string; age: number; position: string }) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
    };
    fetch('/api/players', requestOptions)
        .then(response => response.json());
        window.location.reload();

}

export const AddPlayersForm: React.FC = () => {
    return (
      
        <>
          <h3>Add New Player</h3>
           <Formik initialValues={initialValues} onSubmit={values => {
            onSubmit(values);
        }}
        >
            {({values, handleChange}) => (
            <Form>
                <TextField name='name' value={values.name} onChange={handleChange} />
                <TextField name='number' value={values.number} onChange={handleChange} />
                <TextField name='nationality' value={values.nationality} onChange={handleChange} />
                <TextField name='age' value={values.age} onChange={handleChange} />
                <TextField name='position' value={values.position} onChange={handleChange} />
                <Button type='submit'>Submit</Button>
            </Form>
        )}
        </Formik>
        </>
     
    );
};
