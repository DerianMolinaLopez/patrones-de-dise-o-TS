import Query from './Query.ts';

export default class QueryBuilder {
  private query:Query
  private table:string = ''
  constructor(table:string){

    this.query = new Query()
     this.table = table


  }
  select(fiels:string[]):QueryBuilder{

    this.query.query += 'Select '+fiels.toString()+' FROM '+ this.table

    return this;
  }

  where(condition:string):QueryBuilder{
    this.query.query += 'where '+condition+' '

    return this;
  }
  orderBy(field:string):QueryBuilder{
    this.query.query += 'orderBy '+field+' '

    return this;

  }
  limit(limit:number):QueryBuilder{

    this.query.query += 'limit '+limit
    return this;

  }

  execute(){
      return this.query
  }

}