import './App.css';
import Progressbar from './component/Progress_bar';
import ProgressBar from 'react-bootstrap/ProgressBar'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
     
   <div className="App">
     <h3 className="heading">Progress Bar</h3>
     <ProgressBar>
      <ProgressBar striped variant="success" now={35} key={1} />
      <ProgressBar variant="warning" now={20} key={2} />
      <ProgressBar striped variant="danger" now={10} key={3} />
    </ProgressBar>
      <Progressbar bgcolor="orange" progress='30'  height={30} />
      <Progressbar bgcolor="red" progress='60'  height={30} />
      <Progressbar bgcolor="#99ff66" progress='50'  height={30} />
      <Progressbar bgcolor="#ff00ff" progress='85'  height={30} />
      <Progressbar bgcolor="#99ccff" progress='95'  height={30} />
   </div>
     
  );
}
  
export default App;