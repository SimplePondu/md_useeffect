import React, { CSSProperties, useEffect, useState } from 'react';
import './App.css';




const App = () => {
  const [password, setPassword] = useState<string>('');
  const [password2, setPassword2] = useState<string>('');
  const [user, setUser] = useState<string>('')
  const [bgcolor, setBgColor] = useState<CSSProperties>()

  useEffect(() => {

    if (password === password2) {
      setBgColor({ backgroundColor: 'lightgreen', border: 'none' })
    } else {
      setBgColor({ backgroundColor: 'red', border: 'none' })
    }

  }, [password, password2]);

  useEffect(() => {

    if (password === password2) {
      setBgColor({ backgroundColor: 'lightblue', border: 'none' })
    } else {
      setBgColor({ backgroundColor: 'red', border: 'none' })
    }

  }, []);

  return (
    <div>
      <div className="row center-xs">
        <div className="col-xs-6 ">
        <input className="field field_login" style={{backgroundColor:'lightblue', border:'none'}}
          type="text"
          placeholder='user_name:'
          value={user}
          onChange={(e) => {
            const newValue = e.target.value;
            setUser(newValue);
          }}
        />
        </div>
      </div>


      <div className="row">
        <div className="col-xs-6">
        <input className="field" style={bgcolor}
          type="text"
          placeholder='parole:'
          value={password}
          onChange={(e) => {
            const newValue = e.target.value;
            setPassword(newValue);
          }}
        />

        <input className="field" style={bgcolor}
          type="text"
          placeholder='atkārtojiet paroli:'
          value={password2}
          onChange={(e) => {
            const newValue = e.target.value;
            setPassword2(newValue);
          }}
        />
        </div>
      </div>
      
    </div>
  );
}

export default App;


//input lauks parolei done
//kontrolētais inputs  done
// abi iet caur state done
// efektā salīdzina vai vienādi, ja nav sarkans lauks, ja ir zaļs lauks