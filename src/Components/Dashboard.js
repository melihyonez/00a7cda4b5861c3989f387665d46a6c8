import React, { useCallback, useEffect, useState } from 'react';
import { IconButton } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {
  Clock, Hearth, Layout, Play,
} from '../Assets/icons';
import {
  AlbumCard, CategoryCard, CustomButton, CustomIconButton, DashboardWrapper,
} from '../Assets/styled';
import { setAppConfig } from '../Store/Actions/appConfig';

function Dashboard() {
  const [playing, setPlaying] = useState(false);

  const albums = useSelector((reducer) => reducer.appConfig.albums);
  const categories = useSelector((reducer) => reducer.appConfig.categories);
  const listeners = useSelector((reducer) => reducer.appConfig.listeners);

  const dispatch = useDispatch();
  const setAppConfigAction = useCallback((key, value) => dispatch(setAppConfig(key, value)), [dispatch]);

  useEffect(() => {
    // setAppConfigAction('albums', [1]);
  });

  const addRecentlyPlayed = (albumId) => {
    const index = categories[1].albums.indexOf(albumId);
    const newCateories = [...categories];
    if (!(index === -1)) {
      newCateories[1].albums.splice(index, 1);
    }
    // newCateories[1].albums.splice(0, 0, albumId);
    newCateories[1].albums.unshift(albumId);
    setAppConfigAction('categories', newCateories);
  };

  const playAlbum = (albumId) => {
    if (playing === albumId) {
      setPlaying(false);
      addRecentlyPlayed(albumId);
    } else if (playing) {
      addRecentlyPlayed(playing);
      setPlaying(albumId);
    } else {
      setPlaying(albumId);
    }
  };

  const likeAlbum = (albumId, currentValue) => {
    const newAlbums = [...albums];
    newAlbums.find((x) => x.id === albumId).liked = !currentValue;
    setAppConfigAction('albums', [...newAlbums]);

    const newCateories = [...categories];
    if (currentValue) {
      const index = categories?.[3].albums.indexOf(albumId);
      if (!(index === -1)) {
        newCateories?.[3].albums.splice(index, 1);
      }
    } else {
      newCateories?.[3].albums.unshift(albumId);
      setAppConfigAction('categories', newCateories);
    }
  };

  return (
    <DashboardWrapper>
      <div className="categories">
        {
          categories?.map?.((item) => (
            item?.albums?.length > 0 && (
              <CategoryCard key={item.id}>
                <div className="categoryHeader">
                  <div className="name">
                    <Layout />
                    <h3>{item.name}</h3>
                  </div>
                  <CustomButton>See All</CustomButton>
                </div>
                <div className="body">
                  {
                    albums && item.albums?.map((albId) => {
                      const album = albums?.find((alb2) => alb2.id === albId);
                      return (
                        <AlbumCard key={`${albId}${item.id}`} $playing={playing === albId} style={{ backgroundImage: `url(${album.image})` }}>
                          <div className="header">
                            {
                            playing === albId && (
                              <>
                                <div className="listeners">
                                  {
                                    listeners?.map?.((lst) => (
                                      <img key={lst.id} src={lst.image} alt={lst.name} />
                                    ))
                                  }
                                </div>
                                <div className="playAnimation">
                                  <span />
                                  <span />
                                  <span />
                                </div>
                              </>
                            )
                          }
                            <CustomIconButton
                              onClick={() => likeAlbum(albId, album.liked)}
                              $purple={album.liked}
                            >
                              <Hearth />
                            </CustomIconButton>
                          </div>
                          <div className="info">
                            <div>
                              <h5>{album.name}</h5>
                              <p><Clock />{album.duration}</p>
                            </div>
                            <IconButton onClick={() => playAlbum(albId)}>
                              <Play />
                            </IconButton>
                          </div>
                        </AlbumCard>
                      );
                    })
                  }
                </div>
              </CategoryCard>
            )
          ))
        }
      </div>
    </DashboardWrapper>
  );
}

export default Dashboard;
