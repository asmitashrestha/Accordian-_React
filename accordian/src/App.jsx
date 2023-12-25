import GithubProfileFinder from './components/Github_Profile_Finder/GithubProfileFinder'
import Accordian from './components/accordian'
import ModalTest from './components/custom-modal-popup/ModalTest'
import UseFetchHook from './components/customhooks/UseFetchHook'
import UseFetchHookTest from './components/customhooks/UseFetchHookTest'
import FeatureFlag from './components/figureflagImplemenation'
import FeatureFlagGlobalState from './components/figureflagImplemenation/context/FigureFlagImplemenation'
import FigureFlagImplemenation from './components/figureflagImplemenation/context/FigureFlagImplemenation'
import ImageSlider from './components/imageSlider'
import LoadMoreBtn from './components/loadMorebtn/LoadMoreBtn'
import QrGenerator from './components/qrcodeGenerator/QrGenerator'
import RandomColor from './components/randomColor'
import ScrollIndicator from './components/scroll-Indicator/ScrollIndicator'
import SearchAutoComplete from './components/searchAutocomplete/SearchAutoComplete'
import StarRating from './components/starRating'
import Check from './components/test/Cheque'
import ThemeChanger from './components/themeChange/ThemeChanger'
import TreeView from './components/treeView'
import menus from './components/treeView/data'

const App = () => {
  // const slides = [
  //   {id:1, url: "http://localhost:5173/img1.jpg", title: "beach" },
  //   {id:2, url: "http://localhost:5173/img2.jpg", title: "boat" },
  //   {id:3, url: "http://localhost:5173/img3.jpg", title: "forest" },
  //   {id:4, url: "http://localhost:5173/img4.jpg", title: "city" },
  //   {id:5, url: "http://localhost:5173/img5.jpg", title: "italy" },
  // ];
  return (
    <div >
      {/* <Accordian/> */}
      {/* <RandomColor/> */}
      {/* <StarRating noOfStars={10}/> */}
      {/* <div className="container">
        <ImageSlider slides= {slides}/>
      </div> */}
      {/* <LoadMoreBtn/> */}

      {/* <TreeView menus={menus}/> */}
      {/* <QrGenerator/> */}

      {/* <ThemeChanger/> */}

      {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/> */}

      {/* <ModalTest/> */}
{/* 
      <GithubProfileFinder/> */}

      {/* <SearchAutoComplete/> */}
      {/* <Check/> */}

      {/* <FeatureFlagGlobalState>
        <FeatureFlag/>
      </FeatureFlagGlobalState> */}

      <UseFetchHookTest/>
      
    </div>
  )
}


export default App
