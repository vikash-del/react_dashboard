import Appbar from '../components/dashboard/appbar/Appbar';
import Navbar from '../components/dashboard/navbar/Navbar';
import Alert from '../components/dashboard/alert/Alert';
import Breadcrumbs from '../components/dashboard/breadcrumbs/Breadcrumbs';
import AccountOverview from '../components/dashboard/accountOverview/AccountOverview';
import Button from '../components/dashboard/button/Button';
import Aboutus from '../components/dashboard/aboutus/Aboutus';
import Footer from '../components/dashboard/footer/Footer';
import MainBody from '../components/dashboard/mainBody/MainBody';

function Dashboard() {
  return (
    <>
      <Appbar />
      <Navbar />
      <Alert />
      <Breadcrumbs />
      <AccountOverview />
      <MainBody />
      <Button />
      <Aboutus />
      <Footer />
    </>
  );
}

export default Dashboard;
