import {InMemoryDbService} from "angular2-in-memory-web-api";

export class InMemoryPersonInfoService implements  InMemoryDbService{
  createDb(){
    let personinfoes = [
      {id:1,name:'Tom',sex:'man',age:10,email:'123@456.com',address:'USA Los Angeles',phone:'7788145' },
      {id:2, name:'Jerry',sex:'woman', age:5,email:'133@466.com',address:'USA Los Angeles',phone:'74548951'},
      {id:3, name:'Sherlock',sex:'man', age:5,email:'134@466.com',address:'USA Los Angeles',phone:'74548952'},
      {id:4, name:'Holmes',sex:'man', age:5,email:'135@466.com',address:'USA Los Angeles',phone:'74548953'},
      {id:5, name:'Watson',sex:'man', age:5,email:'136@466.com',address:'USA Los Angeles',phone:'74548954'},
      {id:6, name:'Sarah',sex:'woman', age:5,email:'137@466.com',address:'USA Los Angeles',phone:'74548955'},
      {id:7, name:'Einstein',sex:'woman', age:5,email:'138@466.com',address:'USA Los Angeles',phone:'74548956'},
      {id:8, name:'Bill',sex:'man', age:5,email:'139@466.com',address:'USA Los Angeles',phone:'74548957'},
      {id:9, name:'Peter',sex:'woman', age:5,email:'140@466.com',address:'USA Los Angeles',phone:'74548958'},
      {id:10, name:'TK',sex:'woman', age:5,email:'141@466.com',address:'USA Los Angeles',phone:'74548959'},
      {id:11, name:'Acher',sex:'man', age:5,email:'142@466.com',address:'USA Los Angeles',phone:'74548960'},
      {id:11, name:'Faker',sex:'man', age:5,email:'142@4667.com',address:'USA Los Angeles',phone:'74548961'}
    ];
    return {personinfoes};
  }
}
