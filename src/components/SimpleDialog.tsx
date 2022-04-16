import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import { IconButton } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import * as React from 'react';
import NotificationsList from './NotificationsList';

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


  const handleClose = (value: string) => {
    setOpen(false);
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
        selectedValue={""}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
