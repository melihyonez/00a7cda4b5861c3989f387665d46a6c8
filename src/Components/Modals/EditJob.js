import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  DialogActions, DialogContent, DialogTitle, InputLabel, MenuItem, TextField,
} from '@material-ui/core';
import { CustomButton, CustomDialog } from '../../Assets/styled';
import { jobPriorties } from '../../Assets/constants';

export default function Modal(props) {
  const [priortyState, setPriortyState] = useState('');

  const {
    open, name, priorty, onClose, onSave,
  } = props;

  useEffect(() => {
    if (priorty) {
      setPriortyState(priorty);
    }
  }, [priorty]);

  return (
    <CustomDialog open={open} maxWidth="sm" fullWidth onClose={() => onClose()} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Job Edit</DialogTitle>
      <DialogContent>
        <div className="inputWrapper">
          <InputLabel>Job Name</InputLabel>
          <TextField
            size="small"
            variant="outlined"
            disabled
            defaultValue={name}
            fullWidth
          />
        </div>
        <div className="inputWrapper">
          <InputLabel htmlFor="Job-Priorty">Job Priorty</InputLabel>
          <TextField
            size="small"
            select
            variant="outlined"
            value={priortyState}
            onChange={(e) => setPriortyState(e.target.value)}
            fullWidth
          >
            <MenuItem value="99" style={{ display: 'none' }}>Select Priorty</MenuItem>
            {
              jobPriorties?.map((prty) => (
                <MenuItem key={prty.id} value={prty.id}>
                  {prty.name}
                </MenuItem>
              ))
            }
          </TextField>
        </div>
      </DialogContent>
      <DialogActions>
        <CustomButton $gray onClick={() => onClose()} color="primary">
          Cancel
        </CustomButton>
        <CustomButton $pink onClick={() => { onSave(priortyState); onClose(); }} color="primary">
          Save
        </CustomButton>
      </DialogActions>
    </CustomDialog>
  );
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  name: PropTypes.string,
  priorty: PropTypes.number,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};
Modal.defaultProps = {
  name: '',
  priorty: null,
};
