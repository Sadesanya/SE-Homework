import './App.css';
import Dashboard from './dashboard';
import Box from './box';
import Visitors from './visitors';

function App() {
  return (
    <div className="App">
      <Dashboard/>
      <Box hname="Reviwes" disnum="1,281" />
      <Box hname="Average Rating" disnum="4.6" />
      <Box hname="Sentiment Analysis" disnum="960" num2="122" num3="321"/>
      <Visitors />
    </div>
  );
}

export default App;
