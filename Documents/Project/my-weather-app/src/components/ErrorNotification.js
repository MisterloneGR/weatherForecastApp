import React from 'react';
import { Alert } from '@mui/material';

const ErrorNotification = ({ message }) => {
  return (
    <Alert severity="error" style={{ marginBottom: '24px' }}>
      {message}
    </Alert>
  );
};

export default ErrorNotification;