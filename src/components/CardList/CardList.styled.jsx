import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const List = styled.ul`
  overflow: auto;
  margin: 0 auto;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
export const LoadMoreButton = styled.button`
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #ff6c00;
  border-radius: 20px;
  color: white;
  padding: 15px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
`;
