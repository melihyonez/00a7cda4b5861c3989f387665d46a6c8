import {
  Button,
  IconButton,
  TextField,
} from '@material-ui/core';
import styled, { createGlobalStyle } from 'styled-components';
import { Colors } from './constants';

export const GlobalStyle = createGlobalStyle`
  * {
    outline: none!important;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    box-sizing: border-box;
  }
  h1, h2, h3, h4, h5, h6, p, a {
    color: ${Colors.white};
  }
  svg {
    flex-shrink: 0;
  }
  ul {
    list-style: none;
  }
  ::-webkit-scrollbar{
    width: 0px;
    height: 0px;
  }
  ::-webkit-scrollbar-thumb{
    background: ${Colors.black};
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb:hover{
    background: ${Colors.purple};
  }
  ::-webkit-scrollbar-track{
    background: ${Colors.white};
    border-radius: 0px;
  }
`;

export const CustomIconButton = styled(IconButton)`
  &.MuiIconButton-root {
    height: 40px;
    color: ${Colors.white};
    ${(props) => props.$naked && `
      background-color: transparent;
      color: ${Colors.white};
      :hover {
        background-color: #fffd;
        opacity: 0.8;
      }
    `}
    ${(props) => props.$purple && `
      background-color: ${Colors.purple};
      color: ${Colors.white};
      :hover {
        background-color: ${Colors.white};
        color: ${Colors.purple};
        opacity: 0.8;
      }
    `}
  }
`;

export const CustomButton = styled(Button)`
  &.MuiButton-root {
    height: 40px;
    color: ${Colors.white};
    background-color: ${Colors.primary};
    :hover {
      background-color: ${Colors.primary};
      opacity: 0.8;
    }
    ${(props) => props.$naked && `
      background-color: transparent;
      color: ${Colors.white};
      :hover {
        background-color: #fffd;
        opacity: 0.8;
      }
    `}
    ${(props) => props.$gray && `
      background-color: ${Colors.lightGray};
      color: ${Colors.gray};
      :hover {
        background-color: ${Colors.lightGray};
        opacity: 0.8;
      }
    `}
    ${(props) => props.$icon && `
      min-width: unset;
    `}
  }
`;

export const CustomTextField = styled(TextField)`
  &.MuiFormControl-root, &.MuiTextField-root {
    height: 59px;
    .MuiInputBase-root {
      background: rgba(0, 0, 0, 0.3);
      border-radius: 24px;
      color: ${Colors.white};
      &::before, &::after {
        content: none;
      }
    }
    input {
      color: ${Colors.white};
    }
    :hover {
      background-color: ${Colors.primary};
      opacity: 0.8;
    }
  }
`;

export const CloseMobileBar = styled.div`
  transform: translateY(-100%);
  /* height: 100vh; */
  height: calc(100vh - 529px);
  width: 100vw;
  /* background-color: #3b2330a1; */
  background-color: #8d2323a1;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 9;
  backdrop-filter: blur(12px);
  :before {
    content: "";
    background: white;
    position: absolute;
    width: 5px;
    height: 50px;
    transform: rotate(45deg);
    left: 50%;
    top: 20px;
  }
  :after {
    content: "";
    position: absolute;
    width: 5px;
    height: 50px;
    background-color: white;
    transform: rotate(-45deg);
    left: 50%;
    top: 20px;
  }
`;

export const SideBarWrapper = styled.div`
  background: rgba(44, 47, 72, 0.5);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  padding: 16px;
  width: 290px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 24px;
  left: 24px;
  bottom: 24px;
  flex-shrink: 0;
  z-index: 10;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  .header {
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${Colors.white};
    color: ${Colors.white};
    padding-bottom: 16px;
    margin-bottom: 16px;
    overflow: hidden;
    h2 {
      font-weight: 900;
      font-size: 24px;
      line-height: 32px;
      margin-left: 10px;
      white-space: nowrap;
    }
  }
  .navigator {
    flex: 1;
    position: relative;
  }
  .navigatorItem {
    display: flex;
    align-items: center;
    padding: 10px;
    color: ${Colors.white};
    border-radius: 5px;
    margin: 8px 0;
    cursor: pointer;
    user-select: none;
    transition: background-color 0.2s ease-in-out;
    white-space: nowrap;
    height: 44px;
    max-width: 100%;
    overflow: hidden;
    &.active1 {
      background-color: ${Colors.black};
      background: rgba(0, 0, 0, 0.5);
      background-blend-mode: overlay;
      svg {
        opacity: 1;
      }
    }
    svg {
      opacity: 0.6;
      transition-property: width, height;
      transition-duration: 0.2s;
      transition-timing-function: ease-in-out;
      margin-left: 0;
    }
    span {
      margin-left: 8px;
    }
    :hover {
      background-color: #764af17a;
    }
  }
  .choosenOne {
    background-color: ${Colors.black};
    background: rgba(0, 0, 0, 0.5);
    background-blend-mode: overlay;
    height: 44px;
    width: 258px;
    z-index: -1;
    border-radius: 5px;
    position: absolute;
    top: -20px;
    transition: 0.3s ease-in-out;
    transition-property: top, width;
  }
  .footer {
    display: flex;
    justify-content: end;
  }
  @media (max-width: 1280px) {
    width: 62px;
    transition: width 0.3s ease-in-out;
    left: 0;
    border-radius: 0 16px 16px 0;
    :hover {
      width: 258px;
      .choosenOne {
        width: 232px;
      }
    }
    .header h2 {
      margin-left: 20px;
    }
    .navigatorItem {
      padding-left: 0;
      svg {
        width: 34px;
        height: 34px;
      }
    }
    .choosenOne {
      width: 62px;
      left: -16px; // sideBarWrapper padding: 16px
      border-radius: 0 5px 5px 0;
    }
    .footer {
      svg {
        width: 28px;
        height: 28px;
        margin-left: 2px;
      }
    }
  }
  @media (max-width: 600px) {
    bottom: 0;
    transform: translateY(calc(100% - 50px));
    transition: all 0.3s;
    right: 0;
    left: unset;
    border-radius: 16px 0 0;
    :hover {
      transform: translateY(0%);
      top: calc(100vh - 529px);
      right: 0;
      width: 100%;
      border-radius: 0;
      .header {
        justify-content: center;
      }
      .choosenOne {
        left: 0;
        right: 0;
        width: 100%;
        border-radius: 5px;
      } & + ${CloseMobileBar} {
        transform: translateY(0%);
      }
    }
    .navigatorItem {
      -webkit-tap-highlight-color: #764af17a;
      :hover {
        background-color: transparent;
      }
    }
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 24px 24px 340px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transition: padding-left 0.3s ease-in-out;
  gap: 10px;
  .user {
    display: flex;
    align-items: center;
    padding: 8px;
    gap: 12px;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 32px;
    img {
      border-radius: 100%;
      width: 48px;
      height: 48px;
      object-fit: cover;
      border: 2px solid ${Colors.white};
    }
    span {
      font-weight: 900;
      font-size: 20px;
      line-height: 27px;
      color: ${Colors.white};
      white-space: nowrap;
    }
  }
  @media (max-width: 1280px) {
    padding-left: 80px;
  }
  @media (max-width: 600px) {
    padding: 4px;
  }
`;

export const AlbumCard = styled.div`
  border-radius: 16px;
  width: 290px;
  height: 330px;
  background: no-repeat center center;
  background-size: cover;
  padding: 20px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  transition-property: filter, background;
  position: relative;
  max-width: calc(100vw - 28px);
  &::before {
    transition: background 0.2s ease-in-out;
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(360deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 46.49%);
    border-radius: 16px;
  }
  &:hover {
    filter: drop-shadow(0px 8px 20px rgba(0, 0, 0, 0.51));
    &::before {
      background: linear-gradient(360deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 90.24%);
    }
  }
  button {
    background: rgba(255, 255, 255, 0.2);
    color: ${Colors.white};
    padding: 0;
    width: 38px;
    height: 38px;
    margin-left: auto;
    :hover {
      background: rgba(255, 255, 255, 0.4);
      color: ${Colors.purple};
    }
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 42px;
    .listeners {
      display: flex;
      img {
        width: 42px;
        height: 42px;
        border-radius: 100%;
        border: 1px solid ${Colors.white};
        & + img {
          margin-left: -21px;
        }
      }
    }
    .playAnimation {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 19px;
      height: 5px;
      gap: 1px;
      padding: 1px;
      margin-left: 10px;
      span {
        width: 5px;
        height: 5px;
        background-color: ${Colors.black};
        border-radius: 5px;
        filter: invert(1);
        mix-blend-mode: difference;
        @keyframes play {
          0%   {height: 5px}
          25%   {height: 15px}
          50%   {height: 19px}
          75%   {height: 8px}
          100% {height: 5px}
        }
        @keyframes play1 {
          0%   {height: 19px}
          25%   {height: 8px}
          50%   {height: 5px}
          75%   {height: 15px}
          100% {height: 19px}
        }
        &:nth-of-type(1) {
          animation: play infinite 1s linear 100ms;
        }
        &:nth-of-type(2) {
          height: 19px;
          animation: play1 infinite 1s backwards;
        }
        &:nth-of-type(3) {
          animation: play infinite 1s linear 300ms;
        }
      }
    }
  }
  .info {
    display: flex;
    flex: 1;
    align-items: flex-end;
    justify-content: space-between;
    color: ${Colors.white};
    z-index: 1;
    h5 {
      font-weight: 900;
      font-size: 16px;
      line-height: 22px;
      padding-bottom: 8px;
    }
    p {
      display: flex;
      align-items: center;
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      svg {
        margin-right: 5px;
      }
    }
    button {
      color: currentColor;
      background-color: rgba(0, 0, 0, 0.16);
      width: 40px;
      height: 40px;
      transition: background-color 0.2s ease-in-out;
      padding: 0;
      :hover {
        background-color: ${Colors.purple};
      }
    }
  }
  ${(props) => props.$playing && `
    .info button {
      background-color: ${Colors.purple};
    }
  `}
`;

export const CategoryCard = styled.div`
  .categoryHeader {
    display: flex;
    justify-content: space-between;
    padding: 8px 24px;
    padding-left: 340px;
    color: ${Colors.white};
    transition: padding-left 0.3s ease-in-out;
    z-index: 1;
    > * {
      z-index: 1;
    }
    .name {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
  .body {
    display: flex;
    gap: 24px;
    overflow-x: auto;
    padding-bottom: 16px;
    padding: 50px 24px 50px 340px;
    margin: -30px 0;
    transition: padding-left 0.3s ease-in-out;
  }
  @media (max-width: 1280px) {
    .body, .categoryHeader {
      padding-left: 80px;
    }
  }
  @media (max-width: 600px) {
    .body, .categoryHeader {
      padding-left: 24px;
    }
  }
`;

export const DashboardWrapper = styled.div`
  overflow-y: auto;
  max-height: 100vh;
  padding: 16px 0;
  padding-top: 90px;
  .categories {
    backdrop-filter: blur(5px);
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  gap: 24px;
  min-height: 100vh;
  min-width: 100vw;
  background: radial-gradient(60% 106% at 34.94% 108.33%, #A338B1 0%, #03B3FF 100%);
  position: relative;
  overflow: hidden;
  .content {
    flex: 1;
    z-index: 1;
    width: 100%;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 300px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.69) 0%, rgba(0, 0, 0, 0) 100%);
  }
`;
