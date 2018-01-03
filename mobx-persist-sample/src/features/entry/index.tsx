import * as React from 'react';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import { UserDataStore } from '../../stores/userDataStore';
import { Route } from 'react-router-dom'


@inject('userStore')
@observer class Entry extends React.Component {
    userStore: UserDataStore;
    @observable data:string = "";

    constructor(props: any) {
        super(props);
        this.userStore = props.userStore;
    }
    handleChange = (e:any) => {
        this.data = e.target.value; 
      };
    render() {
        return (
          <div>
              Enter something here. <br/>
             <input type="text" 
                value={this.data} 
                onChange={this.handleChange}
                />
             <Route render={({ history}) => (
                <button
                type='button'
                onClick={() => {
                    this.userStore.data = this.data;    
                    history.push('/result'); 
                }}
                >
                Click Me!
                </button>
            )} />
          </div>
        );
      }
}

export default Entry;