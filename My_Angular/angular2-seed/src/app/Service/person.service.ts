import {PersonInfo} from '../Model/PersonInfo'
import {Injectable} from "@angular/core";
import {Http,RequestOptions,Headers} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs/Observable";

@Injectable()
export class PersonService{
  private headers = new Headers({'content-type':'application/json'});
  private url = 'api/personinfoes';
  constructor(private http:Http){}

  GetPersonNames(value:string):Observable<string[]>{
    return this.http.get(this.url)
      .map(res=>(res.json().data as PersonInfo[]).filter(per=>per.name.indexOf(value)>-1).map(p=>p.name));
  }

  GetPersonInfoes():Promise<PersonInfo[]> {
    return this.http.get(this.url).toPromise()
      .then(reponse=>reponse.json().data as PersonInfo[])
      .catch(this.handleError)
  }

  create(personInfo:PersonInfo):Promise<PersonInfo>{
    return this.http.post(this.url,JSON.stringify({name:personInfo.name,age:personInfo.age,sex:personInfo.sex,email:personInfo.email,address:personInfo.address,phone:personInfo.phone}), new RequestOptions({ headers: this.headers }))
      .toPromise().then(res=>res.json().data as PersonInfo).catch(this.handleError);
  }

  delete(id:number):Promise<void>{
    const url = `${this.url}/${id}`;
    return this.http.delete(url,{ headers: this.headers })
      .toPromise().then(()=>null).catch(this.handleError);
  }

  Update(personInfo:PersonInfo):Promise<void>{
    const url = `${this.url}/${personInfo.id}`;
    return this.http.put(url,JSON.stringify(personInfo),{ headers: this.headers })
      .toPromise().then(()=>null).catch(this.handleError);
  }

  private handleError(error:any):Promise<any>{
    return Promise.reject(error.message || error);
  }
}
