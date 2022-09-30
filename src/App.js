import EntryField from "./components/EntryField";
import ListEntry from "./components/ListEntry";
import {useSelector} from "react-redux";
import Counter from "./components/Counter";

function App() {
    const list = useSelector((state) => state.ListInputThings);
    const value = useSelector((state) => state.value);

    return (
        <div className="App">
            <EntryField></EntryField>
            <Counter counter={value}/>
            {list ?
                list.map((el, key) => <ListEntry key={key} date={el}/>)
                :
                <p>{0}</p>
            }
        </div>
    );
}

export default App;
