import PropTypes from 'prop-types';
import {
  TransactionTable,
  TransactionTitle,
  TransactionItem,
  TransactionRow,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <TransactionTable>
      <thead>
        <tr>
          <TransactionTitle>Type</TransactionTitle>
          <TransactionTitle>Amount</TransactionTitle>
          <TransactionTitle>Currency</TransactionTitle>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <TransactionRow
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          >
            <TransactionItem>{type}</TransactionItem>
            <TransactionItem>{amount}</TransactionItem>
            <TransactionItem>{currency}</TransactionItem>
          </TransactionRow>
        ))}
      </tbody>
    </TransactionTable>
  );
};
TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
