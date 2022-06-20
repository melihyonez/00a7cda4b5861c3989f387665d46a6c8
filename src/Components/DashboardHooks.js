import React, { useEffect, useState } from 'react';
import { IconButton } from '@material-ui/core';
import {
  Clock, Hearth, Layout, Play,
} from '../Assets/icons';
import {
  AlbumCard, CategoryCard, CustomButton, CustomIconButton, DashboardWrapper,
} from '../Assets/styled';
import album1 from '../Assets/img/album1.png';
import album2 from '../Assets/img/album2.png';
import album3 from '../Assets/img/album3.png';
import album4 from '../Assets/img/album4.png';
import album5 from '../Assets/img/album5.png';

// const albums = [
//   {
//     id: 1, name: 'Deep House Relax', duration: '48:00', liked: true, image: 'https://thispersondoesnotexist.com/image',
//   },
//   {
//     id: 2, name: 'Organice', duration: '23:00', liked: false, image: 'https://thispersondoesnotexist.com/image',
//   },
//   {
//     id: 3, name: 'In The Ocean', duration: '1:56:00', liked: false, image: 'https://thispersondoesnotexist.com/image',
//   },
//   {
//     id: 4, name: 'In The Ocean', duration: '20:12', liked: false, image: 'https://thispersondoesnotexist.com/image',
//   },
//   {
//     id: 5, name: 'In The Ocean', duration: '20:12', liked: false, image: 'https://thispersondoesnotexist.com/image',
//   },
//   {
//     id: 6, name: 'Deep House Relax', duration: '48:00', liked: false, image: 'https://thispersondoesnotexist.com/image',
//   },
//   {
//     id: 7, name: 'Organice', duration: '23:00', liked: false, image: 'https://thispersondoesnotexist.com/image',
//   },
//   {
//     id: 8, name: 'In The Ocean', duration: '1:56:00', liked: false, image: 'https://thispersondoesnotexist.com/image',
//   },
//   {
//     id: 9, name: 'In The Ocean', duration: '20:12', liked: false, image: 'https://thispersondoesnotexist.com/image',
//   },
//   {
//     id: 10, name: 'In The Ocean', duration: '20:12', liked: false, image: 'https://thispersondoesnotexist.com/image',
//   },
// ];

const categories2 = [
  {
    id: 1,
    name: 'Albums',
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
        id: 4, name: 'In The Ocean', duration: '20:12', liked: false, image: album4,
      },
      {
        id: 5, name: 'In The Ocean', duration: '20:12', liked: false, image: album5,
      },
      {
        id: 6, name: 'Deep House Relax', duration: '48:00', liked: false, image: 'https://thispersondoesnotexist.com/image',
      },
      {
        id: 7, name: 'Organice', duration: '23:00', liked: false, image: 'https://thispersondoesnotexist.com/image',
      },
      {
        id: 8, name: 'In The Ocean', duration: '1:56:00', liked: false, image: 'https://thispersondoesnotexist.com/image',
      },
      {
        id: 9, name: 'In The Ocean', duration: '20:12', liked: false, image: 'https://thispersondoesnotexist.com/image',
      },
      {
        id: 10, name: 'In The Ocean', duration: '20:12', liked: false, image: 'https://thispersondoesnotexist.com/image',
      },
    ],
  },
  {
    id: 2,
    name: 'Recently Played',
    albums: [
      {
        id: 11, name: 'Deep House Relax', duration: '48:00', liked: false, image: 'https://thispersondoesnotexist.com/image',
      },
      {
        id: 12, name: 'Organice', duration: '23:00', liked: false, image: 'https://thispersondoesnotexist.com/image',
      },
      {
        id: 13, name: 'In The Ocean', duration: '1:56:00', liked: false, image: 'https://thispersondoesnotexist.com/image',
      },
      {
        id: 14, name: 'In The Ocean', duration: '20:12', liked: false, image: 'https://thispersondoesnotexist.com/image',
      },
      {
        id: 15, name: 'In The Ocean', duration: '20:12', liked: false, image: 'https://thispersondoesnotexist.com/image',
      },
      {
        id: 16, name: 'Deep House Relax', duration: '48:00', liked: false, image: 'https://thispersondoesnotexist.com/image',
      },
      {
        id: 17, name: 'Organice', duration: '23:00', liked: false, image: 'https://thispersondoesnotexist.com/image',
      },
      {
        id: 18, name: 'In The Ocean', duration: '1:56:00', liked: false, image: 'https://thispersondoesnotexist.com/image',
      },
      {
        id: 19, name: 'In The Ocean', duration: '20:12', liked: false, image: 'https://thispersondoesnotexist.com/image',
      },
      {
        id: 20, name: 'In The Ocean', duration: '20:12', liked: false, image: 'https://thispersondoesnotexist.com/image',
      },
    ],
  },
  {
    id: 3,
    name: 'Recommended',
    albums: [
      {
        id: 21, name: 'Deep House Relax', duration: '48:00', liked: false, image: 'https://thispersondoesnotexist.com/image',
      },
      {
        id: 22, name: 'Organice', duration: '23:00', liked: false, image: 'https://thispersondoesnotexist.com/image',
      },
      {
        id: 23, name: 'In The Ocean', duration: '1:56:00', liked: false, image: 'https://thispersondoesnotexist.com/image',
      },
      {
        id: 24, name: 'In The Ocean', duration: '20:12', liked: false, image: 'https://thispersondoesnotexist.com/image',
      },
      {
        id: 25, name: 'In The Ocean', duration: '20:12', liked: false, image: 'https://thispersondoesnotexist.com/image',
      },
      {
        id: 26, name: 'Deep House Relax', duration: '48:00', liked: false, image: 'https://thispersondoesnotexist.com/image',
      },
      {
        id: 27, name: 'Organice', duration: '23:00', liked: false, image: 'https://thispersondoesnotexist.com/image',
      },
      {
        id: 28, name: 'In The Ocean', duration: '1:56:00', liked: false, image: 'https://thispersondoesnotexist.com/image',
      },
      {
        id: 29, name: 'In The Ocean', duration: '20:12', liked: false, image: 'https://thispersondoesnotexist.com/image',
      },
      {
        id: 30, name: 'In The Ocean', duration: '20:12', liked: false, image: 'https://thispersondoesnotexist.com/image',
      },
    ],
  },
];

const listeners = [
  { id: 1, name: 'MelihY', image: 'https://thispersondoesnotexist.com/image' },
  { id: 2, name: 'MelihY', image: 'https://thispersondoesnotexist.com/image' },
  { id: 3, name: 'MelihY', image: 'https://thispersondoesnotexist.com/image' },
  { id: 4, name: 'MelihY', image: 'https://thispersondoesnotexist.com/image' },
];

function Dashboard() {
  const [playing, setPlaying] = useState(false);
  const [categories, setCategories] = useState(categories2);
  const [likedCategory, setLikedCategory] = useState([]);

  useEffect(() => {
    setCategories(categories2);
  }, [categories2]);

  useEffect(() => {
    const allAlbums = [];
    for (let i = 0; i < categories2.length; i++) {
      categories2[i].albums.forEach((album) => {
        if (album.liked) {
          allAlbums.push(album);
        }
      });
    }
    setLikedCategory({
      id: categories2?.length,
      name: 'Liked',
      albums: allAlbums,
    });
  }, [categories2]);

  const playAlbum = (albumId) => {
    if (playing === albumId) {
      setPlaying(false);
    } else {
      const newCateories = [...categories2];
      newCateories[1].albums.unshift(newCateories[1].albums.splice(albumId, 1)[0]);
      setPlaying(albumId);
    }
  };

  const likeAlbum = (catId, albumId, currentValue) => {
    let catIdx = catId;
    if (!catId) {
      for (let i = 0; i < categories2.length; i++) {
        if (categories2[i].albums.some((x) => x.id === albumId)) {
          catIdx = categories2[i]?.id;
          break;
        }
      }
    }
    categories.find((category1) => category1.id === catIdx).albums.find((albm1) => albm1.id === albumId).liked = !currentValue;
    const likedAlbum = categories.find((category1) => category1.id === catIdx).albums.find((albm2) => albm2.id === albumId);
    const newLikedAlbums = [...likedCategory.albums];
    if (currentValue) {
      newLikedAlbums.splice(newLikedAlbums.indexOf(likedAlbum), 1);
    } else {
      newLikedAlbums.unshift(likedAlbum);
    }
    setLikedCategory({ ...likedAlbum, albums: newLikedAlbums });
    setCategories([...categories]);
  };

  return (
    <DashboardWrapper>
      <div className="categories">
        {
          categories?.map((item) => (
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
                  item.albums?.map((album) => (
                    <AlbumCard key={album.id} $playing={playing === album.id} style={{ backgroundImage: `url(${album.image})` }}>
                      <div className="header">
                        {
                          playing === album.id && (
                            <>
                              <div className="listeners">
                                {
                                  listeners?.map((listener) => (
                                    <img key={listener.id} src={listener.image} alt={listener.name} />
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
                          onClick={() => likeAlbum(item.id, album.id, album.liked)}
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
                        <IconButton onClick={() => playAlbum(album.id)}>
                          <Play />
                        </IconButton>
                      </div>
                    </AlbumCard>
                  ))
                }
              </div>
            </CategoryCard>
          ))
        }
        {
          likedCategory?.albums?.length > 0 && (
            <CategoryCard key={likedCategory.id}>
              <div className="categoryHeader">
                <div className="name">
                  <Layout />
                  <h3>{likedCategory.name}</h3>
                </div>
                <CustomButton>See All</CustomButton>
              </div>
              <div className="body">
                {
                  likedCategory.albums?.map((album) => (
                    <AlbumCard key={album.id} $playing={playing === album.id} style={{ backgroundImage: `url(${album.image})` }}>
                      <div className="header">
                        {
                          playing === album.id && (
                            <>
                              <div className="listeners">
                                {
                                  listeners?.map((listener) => (
                                    <img key={listener.id} src={listener.image} alt={listener.name} />
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
                          onClick={() => likeAlbum(false, album.id, album.liked)}
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
                        <IconButton onClick={() => playAlbum(album.id)}>
                          <Play />
                        </IconButton>
                      </div>
                    </AlbumCard>
                  ))
                }
              </div>
            </CategoryCard>
          )
        }
      </div>
    </DashboardWrapper>
  );
}

export default Dashboard;
