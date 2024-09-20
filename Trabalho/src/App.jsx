import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import FormularioGasto from './componentes/FormularioGasto';
import ListaGastos from './componentes/ListaGastos';
import TotalGastos from './componentes/TotalGastos';

function App() {
  const [gastos, setGastos] = useState([]);

  const adicionarGasto = (gasto) => {
    setGastos([...gastos, gasto]);
  };

  const removerGasto = (indice) => {
    const novosGastos = gastos.filter((_, i) => i !== indice);
    setGastos(novosGastos);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Registro de Gastos
      </Typography>
      <FormularioGasto adicionarGasto={adicionarGasto} />
      <ListaGastos gastos={gastos} removerGasto={removerGasto} />
      <TotalGastos gastos={gastos} />
    </Container>
  );
}

export default App;
