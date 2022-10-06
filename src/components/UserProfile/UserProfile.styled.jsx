import styled from 'styled-components';

export const Profile = styled.div`
  max-width: 300px;
  text-align: center;
  margin: ${p => p.theme.margin};
  border: ${p => p.theme.borders.normal};
  box-shadow: ${p => p.theme.shadows.boxShadow};
`;
export const Description = styled.div`
  background-color: ${p => p.theme.colors.background};
  padding: ${p => p.theme.space[5]}px;
`;
export const Avatar = styled.img`
  background-color: ${p => p.theme.colors.backgroundSecond};
  border-radius: ${p => p.theme.radii.round};
  width: 100px;
  height: 100px;
`;
export const Name = styled.p`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
export const Tag = styled.p`
  color: ${p => p.theme.colors.secondary};
  font-size: ${p => p.theme.fontSizes.s};
`;
export const Location = styled.p`
color: ${p => p.theme.colors.secondary};
font-size: ${p => p.theme.fontSizes.s};
`;
export const Stats = styled.ul`
  display: flex;
  justify-content: space-evenly;
  padding: ${p => p.theme.space[4]}px;

`;
export const Label = styled.span`
  color: ${p => p.theme.colors.secondary};
  display: block;
  width: 70px;
`;
export const Quantity = styled.span`
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
