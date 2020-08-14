import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import clienteAxios from './config/axios';

import NewAppoitment from './components/NewAppoitment';
import Patients from './components/Patients';
import Appoitment from './components/Appoitment';

function App() {

  // State de la app
  const [appoitments, saveAppoitments] = useState([]);
  const [consult, saveConsult] = useState(true);

  useEffect(() => {
    if (consult) {
      const consultarAPI = () => {
        clienteAxios.get('/patients')
          .then(resp => {
            console.log('response', resp.data);
            // colocar en el state el resultado
            saveAppoitments(resp.data);

            // deshabilitar la consulta
            saveConsult(false);
          })
          .catch(error => {
            console.log(error)
          })
      }
      consultarAPI();
    }
  }, [consult]);

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={() => <Patients appoitments={appoitments} />}
        />
        <Route
          exact
          path="/newAppoitment"
          component={() => <NewAppoitment saveConsult={saveConsult} />}
        />
      </Switch>
      <Route
        exact
        path="/appoitment/:id"
        render={(props) => {
          const appoitment = appoitments.filter(appoitment => appoitment._id === props.match.params.id)
          return (
            <Appoitment
              appoitment={appoitment[0]}
              saveConsult={saveConsult}
            />
          )
        }}
      />
    </Router>
  );
}

export default App;
