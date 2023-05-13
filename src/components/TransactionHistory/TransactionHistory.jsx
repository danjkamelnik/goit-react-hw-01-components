import PropTypes from 'prop-types';
import {TransactionTable, TransactionThead, TheadTr, TheadTh, TransactionTbody, TbodyTr, TbodyTd } from './TransactionHistory.styled';

const TransactionHistory = ({items}) => {
    return (
        <TransactionTable>
            <TransactionThead>
                <TheadTr>
                    <TheadTh>Type</TheadTh>
                    <TheadTh>Amount</TheadTh>
                    <TheadTh>Currency</TheadTh>
                </TheadTr>
            </TransactionThead>

            <TransactionTbody>
                {items.map(({id, type, amount, currency}) => (
                    <TbodyTr key={id}>
                        <TbodyTd>{type}</TbodyTd>
                        <TbodyTd>{amount}</TbodyTd>
                        <TbodyTd>{currency}</TbodyTd>
                    </TbodyTr>
                    ))}
            </TransactionTbody>
        </TransactionTable>
    );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.exact({
          id: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          amount: PropTypes.string.isRequired,
          currency: PropTypes.string.isRequired,
      }),
    ),
  };