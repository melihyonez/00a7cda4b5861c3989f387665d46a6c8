import * as constants from '../constants';

import album1 from '../../Assets/img/album1.png';
import album2 from '../../Assets/img/album2.png';
import album3 from '../../Assets/img/album3.png';
import album4 from '../../Assets/img/album4.png';
import album5 from '../../Assets/img/album5.png';
import album6 from '../../Assets/img/album6.jpg';
import album7 from '../../Assets/img/album7.jpg';
import album8 from '../../Assets/img/album8.jpg';
import album9 from '../../Assets/img/album9.jpg';
import album10 from '../../Assets/img/album10.jpg';

const initialState = {
  albums: [
    {
      id: 1, name: 'Deep House Relax', duration: '48:00', liked: true, image: album1,
    },
    {
      id: 2, name: 'Organice', duration: '23:00', liked: false, image: album2,
    },
    {
      id: 3, name: 'In The Ocean', duration: '1:56:00', liked: false, image: album3,
    },
    {
      id: 4, name: 'On The Lake', duration: '20:52', liked: false, image: album4,
    },
    {
      id: 5, name: 'On The Beach', duration: '20:32', liked: false, image: album5,
    },
    {
      id: 6, name: 'On The Port', duration: '44:00', liked: false, image: album6,
    },
    {
      id: 7, name: 'Rivers of Left Heaven', duration: '59:59', liked: false, image: album7,
    },
    {
      id: 8, name: 'Power of Nature', duration: '1:56:00', liked: false, image: album8,
    },
    {
      id: 9, name: 'Snowflake', duration: '20:52', liked: false, image: album9,
    },
    {
      id: 10, name: 'On The Route 66', duration: '20:22', liked: false, image: album10,
    },
  ],
  categories: [
    {
      id: 1,
      name: 'Albums',
      albums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    {
      id: 2,
      name: 'Recently Played',
      albums: [2, 4, 3, 8, 10],
    },
    {
      id: 3,
      name: 'Recommended',
      albums: [5, 1, 9, 7, 6],
    },
    {
      id: 4,
      name: 'Liked',
      albums: [1],
    },
  ],
  listeners: [
    { id: 1, name: 'MelihY', image: 'https://thispersondoesnotexist.com/image' },
    { id: 2, name: 'MelihY', image: 'https://thispersondoesnotexist.com/image' },
    { id: 3, name: 'MelihY', image: 'https://thispersondoesnotexist.com/image' },
    { id: 4, name: 'MelihY', image: 'https://thispersondoesnotexist.com/image' },
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
