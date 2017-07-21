var searchYouTube = (query, callback, token) => {

  var data = {
    part: 'snippet',
    key: window.YOUTUBE_API_KEY,
    q: query,
    maxResults: 5,
    type: 'video',
    videoEmbeddable: 'true',
    pageToken: token
  };


  $.ajax({
    url: ' https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: data,
    dataType: 'json',
    cache: true,
    success: function (data) {
      callback(data.items);
    }, 

    error: function (data) {
      console.log(data, 'error');
    }

  });
  
};

window.searchYouTube = searchYouTube;
