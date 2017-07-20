var Search = (props) => (
  <div className="search-bar form-inline">
    
    {console.log(props.searchHandler($('.form-control').text)), 'sdfas'}

    <input className="form-control" type="text" id='form-control' onChange = {props.searchHandler($('.form-control').text)}/>
    {console.log(document.getElementById('form-control'))}
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
