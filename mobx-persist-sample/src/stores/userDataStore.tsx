import { observable } from 'mobx';
import { persist } from 'mobx-persist'

export class UserDataStore {        
    @persist @observable data:string = "";  
}
