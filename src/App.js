import logo from './logo.svg';
import ProfilPhoto from './Component1/profile/ProfilPhoto';
import FullName from './Component1/profile/FullName';
import Address from './Component1/profile/Address';
import './App.css';

function App() {
    return ( <
        div style = {
            {
                color: "red",
                display: "flex",
                justifyContent: "space-around",
                flexDirection: "column",
                background: "grey",
            }
        } >
        <
        ProfilPhoto / >
        <
        FullName className = "nom" / >
        <
        Address / >
        <
        /div >
    );
}

export default App;