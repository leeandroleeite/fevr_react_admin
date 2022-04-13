import { Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Form, Formik } from 'formik';
import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';


const initialValues = {
    message: ""
}

const  handleSubmitForm = (values: { message: string; }, player_id: number) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
    };
    fetch('/api/players/' + player_id + '/notifications', requestOptions)
        .then(response => response.json());
}

const handleDeleteRecord = (id: string | number) => {
    fetch('api/players/' + id + 'notifications/' + id, { method: 'DELETE' });
  }

export default function BasicList(props: any) {
  return (
    <Box sx={{ marginLeft:'5%', maxWidth: '75%', bgcolor: 'whitesmoke' }}>
        <List dense={true}>
          <ListItem disablePadding>
              <ListItemText primary="Message:" />
              {props.id}
              <Button  

                      onClick={(id) => handleDeleteRecord(props.id)} 
                      startIcon={<DeleteIcon />}
                      >
                      </Button>
          </ListItem>
        </List>
      <Divider />
        <List dense={true}>
          <ListItem disablePadding>
            <Formik initialValues={initialValues} onSubmit={values => {
                handleSubmitForm(values, props.id);
        }}
        >
            {({values, handleChange}) => (
            <Form>
                <TextField variant='standard' style={{width: '500px'}} label='Message' name='message' value={values.message} onChange={handleChange} />
                <Button startIcon={<AddIcon />} style={{margin: '10px'}} type='submit'>Add</Button>
            </Form>
        )}
        </Formik>
        
          </ListItem>
        </List>
    </Box>
  );
}
