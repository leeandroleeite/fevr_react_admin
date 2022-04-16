import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Form, Formik } from 'formik';
import * as React from 'react';
import { useEffect, useState } from 'react';
 

export default function BasicList(props: any) {


const initialValues = {
    message: ""
}

    const [notifications, setNotifications] = useState([])

    useEffect(() => {
        fetchNotifications(props.id)
    }, [props.id]);

    const fetchNotifications = async (id: string | number) => {
        const response = await  fetch('/api/players/' + id + '/notifications');
        const data = await response.json();
        setNotifications(data)
      }

      const handleDeleteRecord = (player_id: number, id: number, ) => {
        fetch('api/players/' + player_id + '/notifications/' + id, { method: 'DELETE' });
        fetchNotifications(player_id)
    
      }

      const  handleSubmitForm = (values: { message: string; }, player_id: number) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        };
        fetch('/api/players/' + player_id + '/notifications', requestOptions)
            .then(response => response.json());
        
        fetchNotifications(player_id)
    }

  return (
    <Box sx={{ marginLeft:'5%', maxWidth: '150%', bgcolor: 'whitesmoke' }}>
              <p>Notifications:</p>

        <List dense={true}>
          {
                notifications.map((notification, index) => {
                    return(
                        <ListItem key={index} disablePadding>
                        <ListItemText/>
                        <p>{notification['message']}</p>
                        <Button  
                        onClick={(id) => handleDeleteRecord(props.id, notification['id'])} 
                        startIcon={<DeleteIcon />}
                        >
                        </Button>
                        </ListItem>
                    )
                })
            }
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
