import logo from './logo.svg';
import './App.scss';
import Header from './components/common/header';
import { footerData, headerData, landingPageData } from './utils/pageData';
import Landing from './containers/landing';
import Footer from './components/common/footer';

function App() {
  return (
    <div className="App">
      <Header data={headerData} />
      <Landing data={landingPageData} />
      <Footer items={footerData.items} copyright={footerData.copyright} />
    </div>
  );
}

export default App;
