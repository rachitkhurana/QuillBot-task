import logo from './logo.svg';
import './App.scss';
import Header from './components/common/header';
import { headerData, landingPageData } from './utils/pageData';
import Landing from './containers/landing';

function App() {
  return (
    <div className="App">
      <Header data={headerData} />
      <Landing data={landingPageData} />
    </div>
  );
}

export default App;
