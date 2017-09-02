import React    from 'react';
import ReactDOM from 'react-dom';

// Styles
import './styles/index.css';

// Components
import Header from './components/header.js';
import Artwork from './components/artwork.js';
import Graphs from './components/graphs.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="row text-center">
          <Header header="SFMOMA Dashboard" />
        </div>
        <div className="text-center">
          <Graphs />
        </div>
        <div className=" artwork-container text-center">
          <Artwork />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
