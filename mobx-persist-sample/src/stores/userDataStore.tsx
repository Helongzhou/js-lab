import { observable } from 'mobx';
import { create, persist } from 'mobx-persist'

export class UserDataStore {    
    @persist @observable data:string = "";    
}

const hydrate = create({
    storage: localStorage,
    jsonify: false  
  })
  
  export const userDataStore = new UserDataStore()
  
  hydrate('userDataStore', userDataStore)
    // post hydration
    .then(() => console.log('some hydrated'))