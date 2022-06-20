import { IconButton, InputAdornment } from '@material-ui/core';
import React from 'react';
import { ArrowDown, Search } from '../Assets/icons';
import { CustomTextField, HeaderWrapper } from '../Assets/styled';

const Header = () => (
  <HeaderWrapper>
    <CustomTextField
      id="outlined-basic"
      placeholder="Search"
      variant="filled"
      // size="small"
      // name="search"
      hiddenLabel
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
      }}
    />
    <div className="user">
      <img src="https://thispersondoesnotexist.com/image" alt="user" />
      <span>
        MelihY
        <IconButton>
          <ArrowDown />
        </IconButton>
      </span>
    </div>
  </HeaderWrapper>
);

export default Header;
