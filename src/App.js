import hot from './assets/hot.png'
import cold from './assets/cold.png'

function App() {
  return (
    <div className="app" style={{backgroundImage: `url(${hot})`}}>
      <div className='overlay'>
        <div className='container'>
          <div className='section section_inputs'>
            <input type='text' name='city' placeholder='Enter City Here...'/>
            <button>°F</button>
          </div>
          <div className='section section_temperature'>
            <div>
              <h3>hello?</h3>
              <img alt='placeholder'></img>
              <h3>cloudy</h3>
            </div>
            <div className='temp'>
              <h2>72</h2>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default App;
