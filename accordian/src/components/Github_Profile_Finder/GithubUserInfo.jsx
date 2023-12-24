

const GithubUserInfo = ({user}) => {
  const {avatar_url,followers, following,public_repos, name,created_at
  } = user
  return (
    <div>
      <div className="profile-github">
        <img src={avatar_url} alt="user profile pic" />
      </div>
      <div className="info flex ">
        <p><span className="font-bold"> Followers</span> :{followers}</p>
        <p><span className="font-bold"> Following </span>:{following}</p>
        <p><span className="font-bold"> Public Repos</span> :{public_repos}</p>
      </div>
      
    <div className="date mt-4 font-bold text-gray-800">
       <p>This account is created at {created_at}</p>
    </div>
     
    </div>
  )
}

export default GithubUserInfo
