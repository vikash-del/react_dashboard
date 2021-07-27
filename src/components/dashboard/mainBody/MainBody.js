import BalanceCard from '../balanceCard/BalanceCard';
import DotsMobileStepper from '../caurosel/Carousel';
import Tab from '../tab/Tab';
import TabButtons from '../tabButtons/TabButtons';

import './MainBody.css';

function MainBody() {
  return (
    <div className='main-body'>
      <div className='max-width'>
        <BalanceCard />
        <Tab />
      </div>
      <div className='tab-button'>
        <TabButtons />
        <DotsMobileStepper />
      </div>
    </div>
  );
}

export default MainBody;
