import React, { useContext, useEffect } from 'react'
import { Alert, Snackbar } from '@mui/material'
import { Context } from '@/main/factories/context/context'

const Notification: React.FC = () => {
  const [open, setOpen] = React.useState(false)
  const { notification } = useContext(Context)
  const autoHideDuration = 3000

  useEffect(() => {
    if (notification?.message) {
      setOpen(true)
      setTimeout(() => {
        setOpen(false)
      }, autoHideDuration)
    }
  }, [notification])

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ): void => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert
        onClose={handleClose}
        severity={notification?.severity}
        variant="filled"
        sx={{ width: '100%' }}
      >
        {notification?.message}
      </Alert>
    </Snackbar>
  )
}

export default Notification
