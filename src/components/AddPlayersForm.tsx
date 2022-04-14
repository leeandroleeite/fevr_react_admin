import DeleteIcon from '@mui/icons-material/Delete';
import { Button, TextField } from '@mui/material';
import { Form, Formik } from 'formik';
import React from 'react';



const initialValues = {
    name: "Bruno Fernandes",
    number: "18",
    nationality: "Portugal",
    age: 27,
    position: "M",
    birthdate: "1994-09-08",
}

const  handleSubmitForm = (values: { name: string; number: string; nationality: string; age: number; position: string; birthdate: string }) => {
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
            <h1>Add New Player</h1>

            <Formik initialValues={initialValues} onSubmit={values => {
                handleSubmitForm(values);
        }}
        >
            {({values, handleChange}) => (
            <Form>
                <TextField style={{margin: '5px'}} label='Name' name='name' value={values.name} onChange={handleChange} />
                <TextField style={{margin: '5px'}} label='Number' name='number' value={values.number} onChange={handleChange} />
                <TextField style={{margin: '5px'}} label='Nationality' name='nationality' value={values.nationality} onChange={handleChange} />
                <TextField style={{margin: '5px'}} label='Age' name='age' value={values.age} onChange={handleChange} />
                <TextField style={{margin: '5px'}} label='Birth Date' name='birthdate' value={values.birthdate} onChange={handleChange} />
                <TextField style={{margin: '5px'}} label='Position' name='position' value={values.position} onChange={handleChange} />
                <Button style={{margin: '15px'}} variant = "contained" type='submit'>Submit</Button>
            </Form>
        )}
        </Formik>
        </>
     
    );
};
