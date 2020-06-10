import React ,{Component}from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';



class App extends Component{
    
  state={

  }
  componentDidMount(){
    this._getMovies();
  }

 _getMovies=async ()=>{
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi=()=>{
   return fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
    .then(request=>request.json())//fetch 후 결과가 request 에 객체로 들어감
    .then(json=>json.data.movies)//tehn 후 결과가 들어감 json으로 
    .catch(err=>console.log(err))
  }
 
  _renderMovies = () => {
    const movies = this.state.movies.map(
      movie=> {
         return <Movie 
         title = {movie.title_english} 
         poster = {movie.medium_cover_image} 
         key={movie.id} 
         genres={movie.genres}
         synopsis={movie.synopsis}
         />}
     )
     return movies;
  }

  render(){
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies(): "Loading"
        }
     </div>
  );
  }
}

export default App;