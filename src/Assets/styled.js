import { Button, Dialog } from '@material-ui/core';
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
    color: ${Colors.dark};
  }
  /* a, a:hover {
    text-decoration: none;
  } */
  ul {
    list-style: none;
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
    ${(props) => props.$pink && `
      background-color: ${Colors.pink};
      color: ${Colors.white};
      :hover {
        background-color: ${Colors.pink};
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

export const Header = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  height: 100px;
  border-bottom: 1px solid ${Colors.lightGray};
  .logo {
    display: flex;
    align-items: center;
    img {
      height: 100px;
      object-fit: contain;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  margin-bottom: 80px;
  .createJob {
    padding-top: 40px;
    h2 {
      /* font-size: 1.5rem; */
      margin-bottom: 16px;
    }
    button {
      /* margin-top: auto;
      margin-left: 16px;
      min-width: fit-content; */
    }
    label {
      display: block;
      margin-bottom: 8px;
    }
    .createJobForm {
    }
    .wrapWrapper{
      display: flex;
      align-items: end;
      margin: -8px;
      /* overflow: hidden; */
      > * {
        margin: 8px;
      }
      Button {
        margin-left: auto;
      }
      @media (max-width: 959px) { // grid md
        flex-wrap: wrap;
      }
    }
    .inputWrapper {
      flex: 1 200px;
      /* overflow: hidden; */
    }
    .MuiFormHelperText-root, .MuiFormHelperText-root.Mui-error {
      position: absolute;
      bottom: -20px;
    }
  }
  .jobList {
    padding-top: 40px;
    h2 {
      margin-bottom: 16px;
    }
    .tableHeader {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      span {
        color: ${Colors.gray};
      }
    }
  }
  .MuiFormControl-root {
    background-color: ${Colors.white};
    border-radius: 4px;
  }
`;

export const PriortyCell = styled.div`
  width: 80px;
  text-align: center;
  padding: 8px;
  border-radius: 4px;
  color: ${Colors.white};
  font-size: 0.8rem;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  ${(props) => (props.type === 1 ? `
    background-color: ${Colors.pink};
  ` : props.type === 2 ? `
    background-color: ${Colors.secondary};
  ` : props.type === 3 && `
    background-color: ${Colors.primary};
  `)}
`;

export const TableWrapper = styled.div`
  .tableSearch {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    background-color: ${Colors.extraLightPurple};
    border-radius: 4px 4px 0 0;
    border: 1px solid ${Colors.lightPurple};
    border-bottom: none;
    > * {
      margin: 10px;
    }
    .flex1 {
      flex: 1 200px;
    }
    .flex3 {
      flex: 3 200px;
    }
    .inputWrapper {
      /* min-width: 200px; */
      overflow: hidden;
    }
  }
  .table {
    width: 100%;
    overflow: auto;
    border: 1px solid ${Colors.lightPurple};
    border-radius: 0 0 4px 4px;
    table {
      width: 100%;
      border-collapse: collapse;
      thead {
        background-color: ${Colors.lightPurple};
      }
      th, td {
        text-align: left;
        &:first-of-type {
          padding-left: 8px;
        }
      }
      tr {
        &:nth-of-type(even) {
          background-color: ${Colors.extraLightGray};
        }
        &:hover {
          td {
            background-color: ${Colors.extraLightPurple};
          }
        }
      }
      th {
        padding: 8px;
        position: sticky;
        left: -8px;
        color: ${Colors.gray};
        background-color: ${Colors.lightPurple};
        .sortable {
          display: inline-flex;
          width: 24px;
          height: 24px;
          visibility: hidden;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
          min-width: 24px;
          margin-left: 8px;
          &.active {
            visibility: visible;
            opacity: 1;
            .sortableIcon {
              color: ${Colors.primary};
            }
          }
          .sortableIcon {
            position: absolute;
            :first-of-type {
              top: -5px;
            }
            :last-of-type {
              bottom: -12px;
            }
          }
        }
        :hover {
          .sortable {
            visibility: visible;
            opacity: 1;
          }
        }
      }
      td {
        font-weight: 500;
        font-size: 1.125rem;
        padding: 16px 16px 16px 8px;
        transition: background-color 0.2s ease-in-out;
        /* white-space: nowrap; */
      }
          
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  min-height: 48px;
  padding: 8px 16px;
  background-color: ${Colors.lightGray};
  margin-top: auto;
  .footerLeft {
    display: flex;
    align-items: center;
  }
  img {
    height: 24px;
    object-fit: contain;
    margin: auto 8px;
    mix-blend-mode: darken;
  }
  span, a {
    font-size: 0.75rem;
    color: ${Colors.dark};
  }
  .footerRight {
    margin: 8px;
    span {
      white-space: nowrap;
      display: block;
    }
  }
`;

export const CustomDialog = styled(Dialog)`
  .MuiDialogTitle-root {
    text-align: center;
    .MuiTypography-root {
      font-size: 1.5rem;
      font-weight: bold;
      color: ${Colors.dark};
    }
  }
  .MuiDialog-paper {
    background-color: ${Colors.white};
    border-radius: 4px;
    padding: 16px;
  }
  .inputWrapper {
    margin-bottom: 16px;
    label {
      display: block;
      margin-bottom: 8px;
    }
  }
  .MuiDialogActions-root {
    display: flex;
    padding: 8px 64px;
    flex-wrap: wrap;
    justify-content: center;
    button {
      flex: 1;
      margin: 16px;
      min-width: 140px;
    }
  }
  .approveModal {
    text-align: center;
    color: ${Colors.pink};
    svg {
      font-size: 4rem;
    }
    h2 {
      margin-top: 16px;
    }
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 80px;
  min-height: 100vh;
  @media (max-width: 768px) {
    padding: 16px 32px;
  }
`;
