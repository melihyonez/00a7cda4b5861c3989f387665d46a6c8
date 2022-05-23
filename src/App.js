import React, { useEffect, useState } from 'react';
import {
  Tooltip,
} from '@material-ui/core';
import {
  Delete, Edit,
} from '@material-ui/icons';
import { useSelector } from 'react-redux';
import {
  Content,
  CustomButton,
  Footer,
  GlobalStyle,
  Header,
  MainWrapper,
  PriortyCell,
} from './Assets/styled';
import logo from './Assets/img/logo.svg';
import Snackbars from './Components/Snackbars';
import CustomTable from './Components/CustomTable';
import EditJobModal from './Components/Modals/EditJob';
import ApproveModal from './Components/Modals/Approve';
import CreateJob from './Components/CreateJob';

// const jobPriorties2 = [
//   { id: 1, name: 'Urgent' },
//   { id: 2, name: 'Regular' },
//   { id: 3, name: 'Trivial' },
// ];

const jobListData2 = [
  {
    id: 1, name: 'Adaylarla ilgili bir ödev hazırlamam gerekiyor', priorty: 1,
  },
  {
    id: 2, name: 'Yapılan işlerlerle ilgili activity kayıtları oluşturmam gerekiyor', priorty: 2,
  },
  {
    id: 3, name: 'Teknik taskları planlayacağım', priorty: 3,
  },
];

function ActionButtons(value, row, editFunction, deleteFunction) {
  const row2 = row;
  return (
    <>
      <Tooltip placement="top" title="Edit">
        <CustomButton
          $gray
          $icon
          onClick={() => editFunction({
            open: true, name: row2.name, priorty: row2.priorty, id: row2.id,
          })}
        >
          <Edit />
        </CustomButton>
      </Tooltip>
      <Tooltip placement="top" title="Delete">
        <CustomButton
          $gray
          $icon
          onClick={() => deleteFunction({ open: true, id: row2.id })}
          style={{ marginLeft: '0.5rem' }}
        >
          <Delete />
        </CustomButton>
      </Tooltip>
    </>
  );
}

function PriortyCellFunc(priorty, jobPriorties) {
  const priortyName = jobPriorties?.find((p) => p.id === priorty)?.name || '-';
  return (
    <PriortyCell type={priorty}>
      {
        priortyName
      }
    </PriortyCell>
  );
}

function App() {
  const [jobList, setJobList] = useState([]);

  const [editeDialog, setEditeDialog] = useState({ open: false });
  const [approveDialog, setApproveDialog] = useState({ open: false });

  // const jobListData = useSelector((reducer) => reducer.appConfig.jobListData);
  const jobPriorties = useSelector((reducer) => reducer.appConfig.priorties);

  const [snackState, setSnackState] = useState({
    open: false,
    message: '',
    type: '',
    // onClose: () => setSnackState({ ...snackState, open: false }),
  });

  const jobListColumns = [
    {
      name: 'Name',
      selector: 'name',
      tdStyle: { width: '80%' },
      sortable: true,
    },
    {
      name: 'Priorty',
      selector: 'priorty',
      cell: (value) => PriortyCellFunc(value, jobPriorties),
      tdStyle: { width: '20%' },
      sortable: true,
    },
    {
      name: 'Action',
      selector: 'id',
      cell: (value, row) => ActionButtons(
        value,
        row,
        setEditeDialog,
        setApproveDialog,
      ),
      tdStyle: { whiteSpace: 'nowrap' },
    },
  ];

  useEffect(() => {
    // if (JSON.stringify(jobListData) && JSON.stringify(jobList)) {
    if (jobList?.length === 0) {
      setJobList(JSON.parse(localStorage.getItem('jobList')) || jobListData2);
    }
  }, []);

  /**
   * @param {Number} id - id of the job to be deleted
  */
  const deleteJob = (id) => {
    const newData = [...jobList];
    const index = newData.findIndex((m) => m.id === id);
    if (index > -1) {
      newData.splice(index, 1);
      setJobList(newData);
      localStorage.setItem('jobList', JSON.stringify(newData));
    }
  };

  /**
   * @param {Number} id - id of the job to be edited
   * @param {Number} priorty - priorty of the job
  */
  const editJob = (id, priorty) => {
    const newData = [...jobList];
    const index = newData.findIndex((m) => m.id === id);
    if (index > -1) {
      newData[index].priorty = priorty;
      setJobList(newData);
      localStorage.setItem('jobList', JSON.stringify(newData));
    }
  };

  return (
    <>
      <MainWrapper>
        <Header>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </Header>
        <Content>
          <CreateJob onSave={() => setJobList(JSON.parse(localStorage.getItem('jobList')))} />
          <div className="jobList">
            <CustomTable
              header="Job List"
              data={jobList}
              columns={jobListColumns}
            />
          </div>
        </Content>
        <Footer>
          <div className="footerLeft">
            <img src="https://git-scm.com/images/logos/logomark-orange@2x.png" alt="logo" />
            <a href="https://github.com/melihyonez/job-list-frontend" target="_blank" rel="noopener noreferrer">repository</a>
          </div>
          <div className="footerRight">
            <span>© 2022 İsmail Melih YÖNEZ</span>
          </div>
        </Footer>
      </MainWrapper>
      <Snackbars {...snackState} onClose={() => setSnackState({ ...snackState, open: false })} />
      <EditJobModal
        open={editeDialog?.open}
        name={editeDialog?.name}
        priorty={editeDialog?.priorty}
        onSave={(priorty) => editJob(editeDialog?.id, priorty)}
        onClose={() => setEditeDialog({
          open: false, name: '', priorty: 0, id: 0,
        })}
      />
      <ApproveModal
        open={approveDialog?.open}
        id={approveDialog?.id}
        onSave={(id) => deleteJob(id)}
        onClose={() => setApproveDialog({ open: false, id: 0 })}
      />
      <GlobalStyle />
    </>
  );
}

export default App;
