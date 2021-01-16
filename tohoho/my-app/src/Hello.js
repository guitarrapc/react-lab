import logo from './logo.svg';
import './Hello.css';

function Hello(props) {
    let name = 'Tanaka';
    const users = [
        { name: "Tanaka", age: 26 },
        { name: "Suzuki", age: 32 },
        { name: "Yamada", age: 43 },
    ];
    const userList = users.map((user, index) =>
        <li key={index}>{user.name} (Age: {user.age})</li>
    );
    return (
        <div style={{ coloe: 'red', fontSize: '20pt' }}>
            <h2>Hello {props.name}!</h2>
            <p>This is ...</p>
            <input type="text" defaultValue={name} />
            <p>3 + 5 = {3 + 5}</p>
            <button onClick={(e) => {
                console.log(e, "hoge");
            }}>OK</button>
            <ul>{userList}</ul>
        </div>
    );
}
export default Hello;
