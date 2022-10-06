import styled from 'styled-components';

export const StatisticSection = styled.section`
  text-align: center;
  margin: ${p => p.theme.margin};
`;
export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  padding: ${p => p.theme.space[4]}px;
`;
export const Item = styled.li`
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  width: 80px;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};
`;
export const Label = styled.span`
  display: block;
  padding-bottom: ${p => p.theme.space[3]}px;
`;
export const Percentage = styled.span`
  font-size: ${p => p.theme.fontSizes.m};
`;
export const Title = styled.h2`
font: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.l};
`;
