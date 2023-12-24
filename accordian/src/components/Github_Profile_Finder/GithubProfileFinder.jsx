import { useEffect, useState } from 'react'
import '../Github_Profile_Finder/index.css'
import { FaSearch } from 'react-icons/fa'
import GithubUserInfo from './GithubUserInfo'
const GithubProfileFinder = () => {

  const [userName, setUserName] = useState('asmitashrestha')
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchGithubUserData =async ()=>{
    setLoading(true)
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json()

    if(data){
      setUserData(data)
      setLoading(false)
      setUserName('')
    }
    console.log(data);
  }

  const handleSubmit = () =>{
    fetchGithubUserData()
  }

  useEffect(()=>{
    fetchGithubUserData()
  },[])

  if(loading){
    <div>Loading data .......</div>
  }
  return (
    <div className='github-container justify-center text-center'>
      <div className="github-search-button p-7 ">
        <input className='input-user' type="text" name='username' placeholder='Search Github Username'  value={userName} onChange={(e)=> setUserName(e.target.value)}/>
        <button onClick={handleSubmit} className='search-icon'><FaSearch/></button>

        {
          userData!== null ? <GithubUserInfo user={userData}/> : null
        }
      </div>
    </div>
  )
}

export default GithubProfileFinder
