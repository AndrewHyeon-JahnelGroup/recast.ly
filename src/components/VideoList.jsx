var VideoList = (props) => (
  (props.videos.length === 0) ? <div>Loading Video List</div> : 
  <ul class = 'pagination'>  
    <div class = 'active' className="video-list-1">
      {props.videos.map((item) => (<VideoListEntry clickHandeler = {props.clickHandeler} video = {item}/>) )}

    </div>
    <div className="video-list-2">
      {props.videos.map((item) => (<VideoListEntry token = clickHandeler = {props.clickHandeler} video = {item}/>) )}

    </div>
    <div className="video-list-3">
      {props.videos.map((item) => (<VideoListEntry clickHandeler = {props.clickHandeler} video = {item}/>) )}

    </div>
    <div className="video-list-4">
      {props.videos.map((item) => (<VideoListEntry clickHandeler = {props.clickHandeler} video = {item}/>) )}

    </div>
    <div className="video-list-5">
      {props.videos.map((item) => (<VideoListEntry clickHandeler = {props.clickHandeler} video = {item}/>) )}

    </div>
  </ul>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
// window.VideoList = VideoList(videos = exampleVideoData);
ReactDOM.render(
  <VideoList videos= {window.exampleVideoData} />, 
  document.getElementById('app')
);
