import './App.css';
import { useDispatch } from "react-redux"
import { Route, Switch } from 'react-router-dom'

function App() {
  const dispatch = useDispatch()
  const [ isLoaded, setIsLoaded ] = useState(false);

  useEffect(() => {dispatch(authenticate()).then(() => setIsLoaded(true))},[dispatch]);

  return (
    <>
      {isLoaded && (
        <Switch>
        </Switch>
      )}
    </>
  );
}

export default App;
