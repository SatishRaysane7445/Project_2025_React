function Book(author,title,isbn,numcopies){
    this.author=author;
    this.title=title;
    this.isbn=isbn;
    this.numcopies=numcopies;
}
function BookChild(author,title,isbn,numcopies,edition){
    Book.call(this,author,title,isbn,numcopies);
    this.edition=edition;
}
BookChild.prototype=Object.create(Book.prototype);
BookChild.prototype.constructor=BookChild;

BookChild.prototype.getEdition=function(){
    console.log("You are printing Child Class Method \n");
    console.log(`The Current Version of this Book is "${this.edition}"\n`);
}

Book.prototype.getAvailability=function(){
    if(this.numcopies==0){
        return "Out Of Stock\n";
    }
    else if(this.numcopies<10)
    {
        return "Low Stock\n";
    }
    else return "In Stock\n";
}
Book.prototype.sell=function(numcopiesSold=1){
    this.numcopies-=numcopiesSold;
    console.log("Number Of Copies Sold="+numcopiesSold+"\n");
    console.log("Number Of Copies Present="+this.numcopies+"\n");
}
Book.prototype.restocked=function(numcopiesrestock=5){
    this.numcopies+=numcopiesrestock;
        console.log(`Number Of Copies Restocked="+${numcopiesrestock}+\n`);
    console.log("Number Of Copies Present="+this.numcopies+"\n");
}
const Library=new Book("RobertKiyoshaki","RichDadPoorDad","dudg",10);
const CallingChild=new BookChild("RobertKiyoshaki","RichDadPoorDad","dudg",10,10.1);

console.log(Library);
console.log(Library.getAvailability());

Library.sell(5);
console.log(Library.getAvailability());

Library.restocked(15);
console.log(Library.getAvailability());

CallingChild.getEdition();
console.log(CallingChild);
console.log(CallingChild.getAvailability());


