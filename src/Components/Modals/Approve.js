import React from 'react';
import PropTypes from 'prop-types';
import { DialogActions, DialogContent } from '@material-ui/core';
import { ErrorOutline } from '@material-ui/icons';
import { CustomButton, CustomDialog } from '../../Assets/styled';
import { Colors } from '../../Assets/constants';

export default function Modal(props) {
  const {
    open, id, onClose, onSave,
  } = props;

  return (
    <CustomDialog open={open} maxWidth="sm" fullWidth onClose={() => onClose()} aria-labelledby="form-dialog-title">
      <DialogContent>
        <div className="approveModal" style={{ color: Colors.pink, textAlign: 'center' }}>
          <ErrorOutline style={{ fontSize: '4rem' }} />
          <h2 style={{ textAlign: 'center' }}>Are you sure you want to delete it?</h2>
        </div>
      </DialogContent>
      <DialogActions>
        <CustomButton $gray onClick={() => onClose()}>
          Cancel
        </CustomButton>
        <CustomButton $pink onClick={() => { onSave(id); onClose(); }}>
          Approve
        </CustomButton>
      </DialogActions>
    </CustomDialog>
  );
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  id: PropTypes.number,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};
Modal.defaultProps = {
  id: null,
};
