import './Tab.css';

function Tab() {
  return (
    <div className='tab'>
      <div className='tabList'>
        <div>Grants (1)</div>
        <div>Contributions (1890)</div>
        <div>Exchange (0)</div>
        <div>Other Transactions (0)</div>
      </div>
      <div className='giftId'>Gift ID: 4436109</div>
      <p>Vanguard New Jersey Long-Term Tax-Exempt Fund Admiral Shares.</p>
      <div className='tabDetails'>
        <div>
          <p>Entered date</p>
          <p className='status'>10/4/2019</p>
        </div>
        <div>
          <p>Received date</p>
          <p className='status'>10/4/2019</p>
        </div>
        <div>
          <p>Number of shares</p>
          <p className='status'>50</p>
        </div>
      </div>
      <div className='tabDetails2'>
        <div>
          <p>Type</p>
          <p className='status'>VBS Security</p>
        </div>
        <div>
          <p>Amount</p>
          <p className='status'>$50,000.00</p>
        </div>
        <div>
          <p>Status</p>
          <p className='status'>Entered</p>
        </div>
      </div>
      <a href='#'>View Contribution Activity&nbsp;&rarr;</a>
    </div>
  );
}

export default Tab;
