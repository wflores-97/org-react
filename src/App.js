import { useState } from 'react';

import Header from './componentes/header/header';
import Formulario from './componentes/formulario/formulario';
import MiOrg from './componentes/MiOrg';

function App() {
  const [showForm, updateShow]=useState(true);

  const cambiarMostrar =()=>{
    updateShow(!showForm)
}

  return (
    <div>

      <Header/>
      {
      ///operador ternario---> condición === true ? showform : updateShow
      showForm === true ? <Formulario/> : <div></div>
      }
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      
    </div>
  );
}

export default App;
