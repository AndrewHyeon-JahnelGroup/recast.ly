var searchYouTube = (options, callback) => {
  var data = {
    part: 'snippet',
    key: options.key,
    q: options.query,
    maxResults: options.max || 5,
    type: 'video',
    videoEmbeddable: 'true'
  };

  $.ajax({
    url: ' https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: data,
    dataType: 'json',
    
    success: function (data) {
      callback(data.items);
    }, 

    error: function (data) {
      console.log(data, 'error');
    }

  });
  
};

window.searchYouTube = searchYouTube;
