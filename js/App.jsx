
const React = require('react')
const ReactDOM = require('react-dom')

  const App = () => (
    <div className='app-container'>
      <div className='home-info'>
        <h1 className='title'>ChampionoFAce!!</h1>
        <input className='search' type='text' placeholder='Search' />
        <button className='browse-all'> or Browse Alsl</button>
      </div>
    </div>
  )


  ReactDOM.render(<App />, document.getElementById('app'))