class App extends React.Component {
  
  constructor() {
    super(),
    this.state = {
      currentVideo: window.exampleVideoData[0], 
      videos: window.exampleVideoData
      
    };

  }

  handleClick (newVideo) {

    this.setState({currentVideo: newVideo});

  }

  handleSearch (query) {
    
    var obj = {
   
      key: window.YOUTUBE_API_KEY,
      query: query,
      max: 5,

    };

    var results = (data) => {

      this.setState({
        currentVideo: data.items[0],
        videos: data.items
      });
    };

    // console.log(window.searchYouTube(obj, results), 'search');
    

  }

  // componentDidMount() {
  //   searchYouTube(options, callback) {
       
  //   }
  // }

  render () {
    return (
      
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">

            <Search searchHandler = {this.handleSearch.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video = {this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList clickHandeler = {this.handleClick.bind(this)} videos = {this.state.videos}/>
          </div>
        </div>
      </div>

    );
  }
}






// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

ReactDOM.render (

  <App />, 
  document.getElementById('app')

);




















