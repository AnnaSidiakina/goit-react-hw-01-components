import styled from 'styled-components';

export const TransactionTable = styled.table`
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
  border-collapse: collapse;
`;
export const TransactionTitle = styled.th`
  border: #ddd solid 1px;
  padding: 12px 8px;
  background-color: #109187;
  color: white;
  text-transform: uppercase;
`;
export const TransactionItem = styled.td`
  border: #eeeeee solid 1px;
  padding: 8px;
  text-transform: capitalize;
`;
export const TransactionRow = styled.tr`
  :nth-child(even) {
    background-color: #f2f2f2;
  }
`;
