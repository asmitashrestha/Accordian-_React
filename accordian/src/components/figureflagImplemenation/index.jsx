import { useContext } from "react"
import GithubProfileFinder from "../Github_Profile_Finder/GithubProfileFinder"
import RandomColor from "../randomColor"
import StarRating from "../starRating"
import ThemeChanger from "../themeChange/ThemeChanger"
import { FeatureFlagContext } from "./context/FigureFlagImplemenation"


export default function FeatureFlag(){
  const {loading, enableFlag} = useContext(FeatureFlagContext)

  const componentToRender  =[
    {
      key : 'showLightAndDarkMode',
      component:<ThemeChanger/>,
    },
    {
      key : 'showStarRating ',
      component:<StarRating noOfStars={10}/>,
    },
    {
      key : ' ShowRandomColor',
      component: <RandomColor/>,
    },
    {
      key : 'showGithubProfileFinder',
      component: <GithubProfileFinder/>,
    }
  ]

  function checkEnabledFlag(getCurrentKey){
    return enableFlag[getCurrentKey]
  }

  if(loading){
    return (
      <div>
        Loading data from API....
      </div>
    )
  }

  return (
    <div>
      <h1>Feature Flag Implementation</h1>
      {
        componentToRender.map((componentItem) =>
           checkEnabledFlag(componentItem.key) ? 
           componentItem.component :null)
      }
    </div>
  )
}