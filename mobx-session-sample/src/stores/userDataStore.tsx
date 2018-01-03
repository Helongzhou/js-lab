
export class UserDataStore {        
    getData = () => {
        return sessionStorage.getItem("data");
    }

    setData = (data:string) => {
        sessionStorage.setItem("data", data);
    }
}
