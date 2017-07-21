var searchDetails = (query, callback, token) => {

  var data = {
    part: 'contentDetails, statistics',
    key: window.YOUTUBE_API_KEY,
    q: query,
    maxResults: 5,
  };
  

  $.ajax({
    url: ' https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: data,
    success: function (data) {
      callback(data.items);
    }, 

    error: function (data) {
      console.log(data, 'error');
    }

  });
  
};

window.searchDetails = searchDetails;
