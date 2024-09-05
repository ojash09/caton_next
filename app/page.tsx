import StatisticsSection from '@components/StatisticsSection';
import HomePage from '@components/HomePage';
import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import WelcomeSection from '@components/WelcomeSection';

const Page: React.FC = () => {
  return (
    <div className="h-screen max-h-screen">
      <Navbar />
      <WelcomeSection />
      <HomePage />
      <StatisticsSection />
      <Footer />
      
    </div>
  );
}

export default Page;
