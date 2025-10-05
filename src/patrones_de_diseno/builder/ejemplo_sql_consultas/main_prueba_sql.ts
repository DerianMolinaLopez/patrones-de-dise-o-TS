import QueryBuilder from './QueryBuilder.ts';
import Query from './Query.ts';


function mainsql(){
    const query:Query = new QueryBuilder('empleados')
      .select(['id','email','name'])
      .where('id < 9999')
      .orderBy('id DESC')
      .execute()

  query.display()
}
mainsql()