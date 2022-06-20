import React, { useState } from 'react';
import {
  Education,
  Gaming,
  Home,
  LogoSvg,
  Music,
  PlayFilled,
  Science,
  Settings,
  Student,
} from '../Assets/icons';
import { SideBarWrapper } from '../Assets/styled';

const sideBarList = [
  { id: 1, name: 'Home', icon: <Home /> },
  { id: 2, name: 'Music', icon: <Music /> },
  { id: 3, name: 'Gaming', icon: <Gaming /> },
  { id: 4, name: 'Education', icon: <Education /> },
  { id: 5, name: 'Science & Tech', icon: <Science /> },
  { id: 6, name: 'Entertainment', icon: <PlayFilled /> },
  { id: 7, name: 'Student Hubs', icon: <Student /> },
];

const SideBar = () => {
  const [active, setActive] = useState(1);

  const location = (active - 1) * 52 + 8;

  return (
    <SideBarWrapper>
      <div className="header">
        <LogoSvg />
        <h2>Music Podcast</h2>
      </div>
      <div className="navigator">
        {
          sideBarList.map((item) => (
            <div
              key={item.id}
              role="button"
              tabIndex={item.id}
              // className="navigatorItem"
              // className={'navigatorItem' + (active === item.id ? ' active' : '')}
              className={`navigatorItem ${active === item.id ? 'active' : ''}`}
              onClick={() => setActive(item.id)}
              onKeyDown={() => setActive(item.id)}
            >
              {item.icon}
              <span>{item.name}</span>
            </div>
          ))
        }
        <div className="choosenOne" style={{ top: location }} />
      </div>
      <div className="footer">
        <div
          role="button"
          tabIndex={sideBarList.length}
          className="navigatorItem"
          // onClick={() => setActive(1)}
          // onKeyDown={() => setActive(1)}
        >
          <Settings />
          <span>Settings</span>
        </div>
      </div>
    </SideBarWrapper>
  );
};

export default SideBar;
