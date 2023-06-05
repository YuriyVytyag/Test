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

function Card({ user }) {
  const [following, setFollowing] = useState(false);
  const [followers, setFollowers] = useState(user.followers);

  useEffect(() => {
    fetch('https://647a0c79a455e257fa643dfd.mockapi.io/users')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setFollowers(user.followers); // Оновлення значення followers з бекенду
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleFollow = () => {
    if (following) {
      setFollowers(prevFollowers => {
        if (typeof prevFollowers === 'string') {
          return parseInt(prevFollowers.match(/\d+/)) - 1;
        } else if (typeof prevFollowers === 'number') {
          return prevFollowers - 1;
        } else {
          return prevFollowers;
        }
      });
    } else {
      setFollowers(prevFollowers => {
        if (typeof prevFollowers === 'string') {
          return parseInt(prevFollowers.match(/\d+/)) + 1;
        } else if (typeof prevFollowers === 'number') {
          return prevFollowers + 1;
        } else {
          return prevFollowers;
        }
      });
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
          <BoyImage src={user && user.avatar} alt={user && user.name} />
          <Line />
        </WrapperBoy>
        <Tweets>{parseInt(user.tweets.match(/\d+/))} tweets</Tweets>
        <Followers>
          {parseInt(followers.toLocaleString().match(/\d+/))} followers
        </Followers>
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

export default Card;
