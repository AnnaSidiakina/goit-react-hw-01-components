import styled from 'styled-components';

export const Container = styled.div`
margin: ${p => p.theme.margin};
  max-width: 300px;
`;

export const FriendsList = styled.ul`

  text-align: start;
`;

export const Item = styled.li`
  display: flex;
  padding: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
  align-items: center;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.ormal};
  box-shadow: ${p => p.theme.shadows.boxShadow};
`;

export const Status = styled.span`
  background-color: ${props => {
    if (props.isOnline === true) {
      return props.theme.colors.accent;
    } else {
      return props.theme.colors.highlight;
    }
  }}};
  border-radius: ${p => p.theme.radii.round};
  width: 16px;
  height: 16px;
`;

export const Avatar = styled.img`
  margin-left: ${p => p.theme.space[5]}px;
  margin-right: ${p => p.theme.space[5]}px;
`;

export const Name = styled.p`
  flex-grow: 1;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
