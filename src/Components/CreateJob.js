import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Grid, InputLabel, MenuItem, TextField,
} from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { CustomButton } from '../Assets/styled';

export default function CreateJob(props) {
  const [jobName, setJobName] = useState('');
  const [jobPriorty, setJobPriorty] = useState(0);
  const [error, setError] = useState(false);

  const jobPriorties = useSelector((reducer) => reducer.appConfig.priorties);

  const { onSave } = props;

  const addJob = () => {
    if (jobName && jobPriorty && jobPriorty !== 0) {
      const jobList = JSON.parse(localStorage.getItem('jobList'));

      const newJobName = jobName;
      const newJobPriorty = jobPriorty;

      // eslint-disable-next-line no-unsafe-optional-chaining
      const lastId = Math.max(...jobList?.map?.((m) => parseFloat(m.id)));
      const newId = (Number.isInteger(lastId) ? lastId : 0) + 1;

      const newJob = {
        id: newId, name: newJobName, priorty: newJobPriorty, editable: true, deleteable: true,
      };
      const newData = [...jobList, newJob];

      localStorage.setItem('jobList', JSON.stringify(newData));

      setError(false);
      setJobName('');
      setJobPriorty(0);
      onSave();
    } else {
      setError(true);
    }
  };

  return (
    <div className="createJob">
      <h2>Create New Job</h2>
      <Grid container spacing={2} alignItems="flex-end">
        <Grid item md={8} xs={12}>
          <InputLabel style={{ display: 'flex' }}>
            Job Name
            <span style={{ marginLeft: 'auto' }}>{`(${jobName?.length || 0}/255)`}</span>
          </InputLabel>
          <TextField
            size="small"
            variant="outlined"
            value={jobName}
            onChange={(e) => { if (e.target?.value?.length <= 255) setJobName(e.target.value); }}
            fullWidth
            error={error && !(jobName?.length > 0)}
            helperText={error && !(jobName?.length > 0) ? 'Job Name is required' : ''}
          />
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <div className="wrapWrapper">
            <div className="inputWrapper">
              <InputLabel>Job Priorty</InputLabel>
              <TextField
                size="small"
                select
                variant="outlined"
                value={jobPriorty}
                onChange={(e) => setJobPriorty(e.target.value)}
                fullWidth
                error={error && !jobPriorty}
                helperText={error && !jobPriorty ? 'Please select a priorty' : ''}
              >
                <MenuItem value={0} style={{ display: 'none' }}>Select Priorty</MenuItem>
                {
                  jobPriorties?.map((priorty) => (
                    <MenuItem key={priorty.id} value={priorty.id}>
                      {priorty.name}
                    </MenuItem>
                  ))
                }
              </TextField>
            </div>
            <CustomButton
              startIcon={<Add />}
              onClick={() => addJob()}
            >
              Create
            </CustomButton>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

CreateJob.propTypes = {
  onSave: PropTypes.func.isRequired,
};
