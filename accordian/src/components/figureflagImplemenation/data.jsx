
const dummyApiResponse = {
  showStarRating : true,
  showTicTacToe : true,
  ShowRandomColor : false,
  showGithubProfileFinder:false,
}

function featureFalgDataServiceCall (){
  return new Promise((resolve, reject) => {
    if(dummyApiResponse) setTimeout(resolve(dummyApiResponse),500);
    else  reject('some error occur please try again');
  })
}


export default featureFalgDataServiceCall;