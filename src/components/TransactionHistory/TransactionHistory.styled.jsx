import styled from 'styled-components';

export const TransactionTable = styled.table`
  width: 500px;
  margin: ${p => p.theme.margin};
  border-collapse: collapse;
  box-shadow: ${p => p.theme.shadows.boxShadow};
`;
export const TransactionTitle = styled.th`
  border: ${p => p.theme.borders.normal};
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.backgroundSecond};

  text-transform: uppercase;
`;
export const TransactionItem = styled.td`
  border: ${p => p.theme.borders.normal};
  padding: ${p => p.theme.space[3]}px;
  text-transform: capitalize;
  font: ${p => p.theme.fonts.monospace}
`;
export const TransactionRow = styled.tr`
  :nth-child(even) {
    background-color: ${p => p.theme.colors.background};
  }
`;
