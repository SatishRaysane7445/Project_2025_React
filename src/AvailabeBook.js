function Book(title,author,isbn,numcopies){
    this.title=title;
    this.author=author;
    this.isbn=isbn;
    this.numcopies=numcopies;
}
Book.prototype.getAvailability=function(){
    if(this.numcopies==0)
    {
        return "out of stock";
    }
    else if(this.numcopies<10)
    {
        return "Low stock";
    }
    return "In stock";
}
Book.prototype.sell=function(numcopiesSold=1){
    this.numcopies-=numcopiesSold;
}
Book.prototype.restock=function(numcopiesStocked=5){
    this.numcopies+=numcopiesStocked;
}

const HungerGames=new Book("Abrakadabra","codewithharry","100101",0);
console.log(HungerGames.getAvailability());

HungerGames.sell(4);
console.log(HungerGames.getAvailability());
HungerGames.restock(14);
console.log(HungerGames.getAvailability());

