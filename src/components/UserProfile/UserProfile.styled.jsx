import styled from 'styled-components';

export const Profile = styled.div`
  max-width: 300px;
  background-color: white;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
`;
export const Description = styled.div`
  background-color: #f3f9fa;
  padding: 20px;
`;
export const Avatar = styled.img`
  background-color: white;
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;
export const Name = styled.p`
  color: black;
  font-size: 18px;
  font-weight: 500;
`;
export const Tag = styled.p`
  color: #a3aaab;
  font-size: 14px;
`;
export const Location = styled.p`
  color: #a3aaab;
  font-size: 14px;
`;
export const Stats = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  margin: 0;
  padding: 10px;
  border-left: #eeeeee solid 1px;
  border-right: #eeeeee solid 1px;
  border-bottom: #eeeeee solid 1px;
`;
export const Label = styled.span`
  color: #a3aaab;
  display: block;
  width: 70px;
`;
export const Quantity = styled.span`
  font-size: 14px;
  color: black;
  font-weight: 500;
`;
