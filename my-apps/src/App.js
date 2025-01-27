import './App.css';
import Accordion from './components/Accordion';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import TreeView from './components/tree-view';
import menus from "./components/tree-view/data";
import QRCodeGenrator from './components/qr-code-generator';
import LightDarkMode from './components/light-dark-mode';
import ScrollIndicator from './components/scroll-indicator';
import ModalTest from './components/custom-modal-popup/modal-test';
import GithubProfileFinder from './components/github-profile-finder';
import SearchAutocomplete from './components/search-autocomplete';
function App() {
  return (
    <div className="App">
      {/* <Accordion />
      <RandomColor />
      <StarRating />
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
      <LoadMoreData /> */}
      {/* <TreeView menus={menus}/> */}
      {/* <QRCodeGenrator />
      <LightDarkMode />
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/> */}
      {/* <ModalTest />
      <GithubProfileFinder /> */}
      <SearchAutocomplete />
    </div>
  )
}

export default App;
