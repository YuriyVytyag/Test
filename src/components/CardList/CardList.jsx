import React, { useState, useEffect } from 'react';
import Card from 'components/Card/Card';
import { List, LoadMoreButton, Wrapper } from './CardList.styled';

function CardList() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchUsers = () => {
    setTimeout(() => {
      fetch(
        `https://647a0c79a455e257fa643dfd.mockapi.io/users?page=${currentPage}&limit=3`
      )
        .then(response => {
          if (!response.ok) {
            throw new Error('Rate limit exceeded');
          }
          return response.json();
        })
        .then(data => {
          if (currentPage === 1) {
            setUsers([...data]);
          } else {
            setUsers(prevUsers => [...prevUsers, ...data]);
          }
        })
        .catch(error => {
          console.error(error);
        });
    }, 1000);
  };

  useEffect(() => {
    fetchUsers();
  }, [currentPage]);

  const handleLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <Wrapper>
      <List>
        {users.map(user => (
          <li key={user.id}>
            <Card user={user} />
          </li>
        ))}
      </List>
      <LoadMoreButton type="button" onClick={handleLoadMore}>
        Load More
      </LoadMoreButton>
    </Wrapper>
  );
}

export default CardList;
