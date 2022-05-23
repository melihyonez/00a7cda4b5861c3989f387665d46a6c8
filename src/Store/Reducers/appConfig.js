import * as constants from '../constants';

const initialState = {
  priorties: [
    { id: 1, name: 'Urgent' },
    { id: 2, name: 'Regular' },
    { id: 3, name: 'Trivial' },
  ],
  jobListData: [
    {
      id: 1, name: 'Adaylarla ilgili bir ödev hazırlamam gerekiyor', priorty: 1, editable: true, deleteable: true,
    },
    {
      id: 2, name: 'Yapılan işlerlerle ilgili activity kayıtları oluşturmam gerekiyor', priorty: 2, editable: true, deleteable: true,
    },
    {
      id: 3, name: 'Teknik taskları planlayacağım', priorty: 3, editable: true, deleteable: true,
    },
  ],
};

const appConfigReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.APP_CONFIG: {
      const appConfig = state;
      appConfig[action.key] = action.value;
      return { ...state };
    }
    default: {
      return state;
    }
  }
};

export default appConfigReducer;
