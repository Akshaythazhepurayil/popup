import { useState } from 'react';
import './App.css';

function App() {
  const [showModel, setShowModel] = useState(false)
  const [modelPermission, setModelPermission] = useState(false)
  
  return (
    <div className="App">
      <div className='btn_div'>
        <button className='button' onClick={() => setShowModel(true)}>Roles</button>
      </div>
    {showModel && (
      <div className="model">
        <div className="model_container">
          <div className="model_title">
            <p>Add role</p>
          </div>
          <div className="model_content">
            <input className='input' type="text" />
            <button className="save_button">Save</button>
          </div>
          <div className="model_footer">
            <button className="close_button" onClick={() => setShowModel(false) }>Close</button>
          </div>
        </div>
      </div>
      )}
      <div className='btn_div'>
        <button className='permission_button' onClick={() => setModelPermission(true)}>Permission</button>
      </div>
      {modelPermission && (
      <div className="model">
        <div className="model_container">
          <div className="model_title">
            <p>Add Permissions</p>
          </div>
          <div className="model_content">
            <input className='input' type="text" />
            <input className='input' type="text" />
            <button className="save_button">Save</button>
          </div>
          <div className="model_footer">
            <button className="close_button" onClick={() => setModelPermission(false)}>Close</button>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}

export default App;
