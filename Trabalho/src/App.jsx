import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import GastoForm from './components/GastoForm';
import GastoList from './components/GastoList';
import TotalGasto from './components/TotalGasto';

function App() {
  const [gastos, setGastos] = useState([]);

  const adicionarGasto = (gasto) => {
    setGastos([...gastos, gasto]);
  };

  const removerGasto = (index) => {
    const novosGastos = gastos.filter((_, i) => i !== index);
    setGastos(novosGastos);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Registro de Gastos
      </Typography>
      <GastoForm adicionarGasto={adicionarGasto} />
      <GastoList gastos={gastos} removerGasto={removerGasto} />
      <TotalGasto gastos={gastos} />
    </Container>
  );
}

export default App;
