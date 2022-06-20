import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CloseMobileBar, GlobalStyle, MainWrapper } from './Assets/styled';
import Snackbars from './Components/Snackbars';
import SideBar from './Components/SideBar';
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
import { setAppConfig } from './Store/Actions/appConfig';

function App() {
  // const [jobList, setJobList] = useState([]);

  const [snackState, setSnackState] = useState({
    open: false,
    message: '',
    type: '',
    // onClose: () => setSnackState({ ...snackState, open: false }),
  });

  const albums = useSelector((reducer) => reducer.appConfig.albums);
  const categories = useSelector((reducer) => reducer.appConfig.categories);
  const listeners = useSelector((reducer) => reducer.appConfig.listeners);

  const dispatch = useDispatch();
  const setAppConfigAction = useCallback((key, value) => dispatch(setAppConfig(key, value)), [dispatch]);

  useEffect(() => {
    if (localStorage.getItem('categories')) {
      const categoriesLocal = JSON.parse(localStorage.getItem('categories'));
      setAppConfigAction('categories', categoriesLocal);
    }
  }, []);

  useEffect(() => {
    if (categories) {
      localStorage.setItem('categories', JSON.stringify(categories));
    }
  }, [categories]);

  useEffect(() => {
    if (localStorage.getItem('albums')) {
      const albumsLocal = JSON.parse(localStorage.getItem('albums'));
      setAppConfigAction('albums', albumsLocal);
    }
  }, []);

  useEffect(() => {
    if (albums) {
      localStorage.setItem('albums', JSON.stringify(albums));
    }
  }, [albums]);

  useEffect(() => {
    if (localStorage.getItem('listeners')) {
      const listenersLocal = JSON.parse(localStorage.getItem('listeners'));
      setAppConfigAction('listeners', listenersLocal);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem('listeners')) {
      localStorage.setItem('listeners', JSON.stringify(listeners));
    }
  }, [listeners]);

  return (
    <>
      <MainWrapper>
        <SideBar />
        <CloseMobileBar />
        <div className="content">
          <Header />
          <Dashboard />
        </div>
      </MainWrapper>
      <Snackbars {...snackState} onClose={() => setSnackState({ ...snackState, open: false })} />
      <GlobalStyle />
    </>
  );
}

export default App;
