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
      <QRCodeGenrator />
      <LightDarkMode />
    </div>
  )
}

export default App;
