import css from './Tr.module.css';
import PropTypes from 'prop-types';
import {
  TransactionTable,
  TransactionTitle,
  TransactionItem,
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
          <tr
            key={id}
            type={type}
            amount={amount}
            currency={currency}
            className={css.transactionRow}
          >
            <TransactionItem>{type}</TransactionItem>
            <TransactionItem>{amount}</TransactionItem>
            <TransactionItem>{currency}</TransactionItem>
          </tr>
        ))}
      </tbody>
    </TransactionTable>
  );
};
