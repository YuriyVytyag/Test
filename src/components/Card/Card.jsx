import { useState, useEffect } from 'react';
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
} from './Card.styled';
import logo from '../../images/logo.png';
// import face from '../../images/boy.png';

function Card({ user }) {
  const [following, setFollowing] = useState(false);
  const [followers, setFollowers] = useState(user.followers);

  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      const savedFollowing = localStorage.getItem('following');
      const savedFollowers = localStorage.getItem('followers');

      if (savedFollowing !== null) {
        setFollowing(JSON.parse(savedFollowing));
      }
      if (savedFollowers !== null) {
        setFollowers(JSON.parse(savedFollowers));
      }
    }
  }, []);

  useEffect(() => {
    fetch('https://647a0c79a455e257fa643dfd.mockapi.io/users')
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        // Обробляємо помилку, якщо виникла
        console.error(error);
      });
  }, []);

  const handleFollow = () => {
    if (following) {
      setFollowers(prevFollowers => prevFollowers + 1);
    } else {
      setFollowers(prevFollowers => prevFollowers - 1);
    }
    setFollowing(prevFollowing => !prevFollowing);
  };

  const buttonStyles = {
    backgroundColor: following ? '' : '#5CD3A8',
  };

  return (
    <Container>
      <CardWrapper>
        <ImageWrapper>
          <LogoImage src={logo} alt="logo" />
        </ImageWrapper>
        <WrapperBoy>
          <BoyImage src={user && user.avatar} alt={user && user.name} />
          <Line />
        </WrapperBoy>
        <Tweets>{parseInt(user.tweets.match(/\d+/))} tweets</Tweets>
        <Followers>{followers.toLocaleString()} Followers</Followers>
        <Button
          type="button"
          onClick={handleFollow}
          className={following ? 'following' : ''}
          style={buttonStyles}
        >
          {following ? 'Follow' : 'Following'}
        </Button>
      </CardWrapper>
    </Container>
  );
}

export default Card;
