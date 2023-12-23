import Accordian from './components/accordian'
import ImageSlider from './components/imageSlider'
import LoadMoreBtn from './components/loadMorebtn/LoadMoreBtn'
import QrGenerator from './components/qrcodeGenerator/QrGenerator'
import RandomColor from './components/randomColor'
import ScrollIndicator from './components/scroll-Indicator/ScrollIndicator'
import StarRating from './components/starRating'
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

      <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/>

    </div>
  )
}


export default App
