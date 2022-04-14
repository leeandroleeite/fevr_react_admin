import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import { IconButton } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import * as React from 'react';
import NotificationsList from './NotificationsList';

const emails = ['username@gmail.com', 'user02@gmail.com'];

export interface SimpleDialogProps {
    id: number;
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
        <NotificationsList id={props.id} />
    </Dialog>
  );
}

export interface SimpleDialogProps {
    id: number;
}

export default function OpenSimpleDialog(props: any) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                      >
                        <NotificationAddIcon />
                      </IconButton>
      <SimpleDialog
        id={props.id}
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
