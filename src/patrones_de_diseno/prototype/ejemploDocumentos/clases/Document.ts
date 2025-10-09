export default  class Document{
  private tittle:string
  private content:string
  private author:string
  constructor(tittle:string,content:string,author:string) {
     this.tittle = tittle;
     this.content = content;
     this.author = author;
  }
  displayInfo(){
    console.log( this.tittle);
    console.log(this.content)
    console.log(this.author)
  }

  clone():Document{
    return new Document(this.tittle,this.content,this.author)
  }
}