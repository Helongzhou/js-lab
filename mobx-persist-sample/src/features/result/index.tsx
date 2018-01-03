import * as React from 'react';
//import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import { UserDataStore } from '../../stores/userDataStore';

@inject('userStore')
@observer class Result extends React.Component {
    userStore: UserDataStore;

    constructor(props: any) {
        super(props);
        this.userStore = props.userStore;
    }

    render() {
        return (
            <div>
                Your data that you entered is "{this.userStore.data}".
          </div>
        );
    }
}

export default Result;