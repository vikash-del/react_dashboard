import Appbar from '../components/dashboard/appbar/Appbar';
import Navbar from '../components/dashboard/navbar/Navbar';
import Alert from '../components/dashboard/alert/Alert';
import Breadcrumbs from '../components/dashboard/breadcrumbs/Breadcrumbs';
import AccountOverview from '../components/dashboard/accountOverview/AccountOverview';
import Button from '../components/dashboard/button/Button';
import SubFooter from '../components/dashboard/subfooter/SubFooter';
import Footer from '../components/dashboard/footer/Footer';
import MainBody from '../components/dashboard/mainBody/MainBody';
import Menu from '../container/Menu';

function Dashboard() {
  return (
    <>
      <header>
        <Appbar />
      </header>
      <navbar>
        <Menu />
      </navbar>
      <main>
        <Alert />
        <Breadcrumbs />
        <AccountOverview />
        <MainBody />
        <Button />
      </main>
      <footer>
        <SubFooter />
        <Footer />
      </footer>
    </>
  );
}

export default Dashboard;
