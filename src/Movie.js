function Movie(Title,Director,Genre,Release_Year,Ratings){
    this.title=Title;
    this.director=Director;
    this.genre=Genre;
    this.release_year=Release_Year;
    this.ratings=Ratings;
}

Movie.prototype.getOverView=function(){
    return `${this.title} is a Iconic Movie Directed By ${this.director} as a ${this.genre} Movie in year ${this.release_year} With ${this.ratings} Star ratings`;
}
const Puspa=new Movie("Puspa","AluArjun","Action",2022,5);
const Avenger=new Movie("Avenger","Joss Whedon","Action",2012,8.0);
console.log(Puspa);
console.log(Puspa.getOverView());
console.log(Avenger);
console.log(Avenger.getOverView());
