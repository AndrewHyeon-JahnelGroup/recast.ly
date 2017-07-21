var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onChange ={

      _.debounce(function(){console.log(document.querySelector('input'));props.searchHandler(document.querySelector('input').value);}, 400)
    }/>
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
