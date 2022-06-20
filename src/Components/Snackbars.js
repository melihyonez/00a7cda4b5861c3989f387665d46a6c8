import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Snackbar } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';

export default function Snackbars(props) {
  const [openState, setOpenState] = React.useState(false);

  const {
    open, vertical, horizontal, message, type, onClose,
  } = props;

  function TransitionRight(props) {
    return <Slide {...props} direction="left" />;
  }

  useEffect(() => {
    if (open && !openState) {
      setOpenState(true);
    }
  }, [open]);

  // useEffect(() => {
  //   if (openState) {
  //     setTimeout(() => {
  //       setOpenState(false);
  //       onClose();
  //     }, 2000);
  //   }
  // }, [openState]);

  const handleClose = () => {
    setOpenState(false);
    onClose();
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={openState}
      // onClose={() => onClose()}
      onClose={() => handleClose()}
      autoHideDuration={2000}
      message={message}
      key={vertical + horizontal}
      TransitionComponent={TransitionRight}
    />
  );
}

Snackbars.prototype = {
  open: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  vertical: PropTypes.oneOf(['top', 'center', 'bottom']),
  horizontal: PropTypes.oneOf(['left', 'center', 'right']),
  type: PropTypes.oneOf(['info', 'warning', 'error', 'success']),
  onClose: PropTypes.func,
};
Snackbars.defaultProps = {
  vertical: 'top',
  horizontal: 'right',
  type: 'info',
  onClose: () => { },
};
