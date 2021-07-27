import './BalanceCard.css';

function BalanceCard() {
  return (
    <div className='card-body'>
      <div className='card'>
        <p>Current Balance</p>
        <div className='amount'>$120,000</div>
      </div>
      <div className='card'>
        <p>Available Balance</p>
        <div className='amount'>$ 30,000</div>
        <a href='#'>View transaction summary&nbsp;&rarr;</a>
      </div>
    </div>
  );
}

export default BalanceCard;
