

const GithubUserInfo = ({user}) => {
  const {avatar_url,followers, following,public_repos, name} = user
  return (
    <div>
      <img src={avatar_url} alt="" />
      <h2>Followers :{followers}</h2>
      <p>Following :{following}</p>
      <p>Public Repos :{public_repos}</p>
      <p>name:{name}</p>
    </div>
  )
}

export default GithubUserInfo
