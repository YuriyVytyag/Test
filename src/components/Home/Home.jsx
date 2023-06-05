import React, { useState, useEffect } from 'react';
import {
  Container,
  CardWrapper,
  LogoImage,
  ImageWrapper,
  BoyImage,
  WrapperBoy,
  Line,
  Tweets,
  Followers,
  Button,
} from './Home.styled';
import logo from '../../images/logo.png';
import boy from '../../images/boy.png';

function Home() {
  const [followers, setFollowers] = useState(() => {
    const savedFollowers = localStorage.getItem('followers');
    return savedFollowers ? parseInt(savedFollowers) : 10500; // Початкове значення фоловерів
  });
  const [following, setFollowing] = useState(() => {
    const savedFollowing = localStorage.getItem('following');
    return savedFollowing ? JSON.parse(savedFollowing) : false;
  });

  useEffect(() => {
    localStorage.setItem('followers', followers.toString());
    localStorage.setItem('following', JSON.stringify(following));
  }, [followers, following]);

  const handleFollow = () => {
    if (following) {
      setFollowers(prevFollowers => prevFollowers - 1);
    } else {
      setFollowers(prevFollowers => prevFollowers + 1);
    }
    setFollowing(prevFollowing => !prevFollowing);
  };

  const buttonStyles = {
    backgroundColor: following ? '#5CD3A8' : '',
  };

  return (
    <Container>
      <CardWrapper>
        <ImageWrapper>
          <LogoImage src={logo} alt="logo" />
        </ImageWrapper>
        <WrapperBoy>
          <BoyImage src={boy} alt="avatar" />
          <Line />
        </WrapperBoy>
        <Tweets>777 tweets</Tweets>
        <Followers>{followers} followers</Followers>
        <Button
          type="button"
          onClick={handleFollow}
          className={following ? 'following' : ''}
          style={buttonStyles}
        >
          {following ? 'Following' : 'Follow'}
        </Button>
      </CardWrapper>
    </Container>
  );
}

export default Home;
