import React from 'react';
import logo from './logo.svg';
import './Hello.css';

class ClassHello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: 'hello',
            users: [
                { name: "Tanaka", age: 26 },
                { name: "Suzuki", age: 32 }
            ]
        };
    }

    chageListState() {
        let users = this.state.users;
        users.push({ name: "Yamada", age: 43 });
        this.setState({ users: users });
    }

    render() {
        let userList = this.state.users.map((user, index) =>
            <li key={index}>{user.name} (Age: {user.age})</li>
        );
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={() => this.setState({ msg: 'Bye!' })}>Click</button>

                <ul>{userList}</ul>
                <button onClick={() => this.chageListState()}>ListClick</button>
            </div>
        );
    }
}
export default ClassHello;
