import styled from 'styled-components';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  max-width: 300px;
`;

export const FriendsContainer = styled.ul`
  list-style: none;
  text-align: start;
`;

export const Item = styled.li`
  display: flex;
  padding: 15px;
  margin-bottom: 8px;
  align-items: center;
  border: #eeeeee solid 1px;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
`;

export const Status = styled.span`
  background-color: ${props => {
    if (props.isOnline === true) {
      return '#109187';
    } else {
      return '#D83A7A';
    }
  }}};
  border-radius: 50%;
  width: 15px;
  height: 15px;
`;

export const Avatar = styled.img`
  margin-left: 15px;
  margin-right: 15px;
`;

export const Name = styled.p`
  flex-grow: 1;
  font-size: 18px;
  font-weight: 500;
`;
