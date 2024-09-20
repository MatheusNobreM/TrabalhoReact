import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function GastoForm({ adicionarGasto }) {
  const [gasto, setGasto] = useState({ nome: '', data: '', valor: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGasto({ ...gasto, [name]: value });
  };

  const handleSubmit = () => {
    adicionarGasto(gasto);
    setGasto({ nome: '', data: '', valor: '' });
  };

  return (
    <div>
      <TextField
        label="Nome"
        name="nome"
        value={gasto.nome}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Data"
        name="data"
        type="date"
        value={gasto.data}
        onChange={handleChange}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        label="Valor (R$)"
        name="valor"
        value={gasto.valor}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Adicionar Gasto
      </Button>
    </div>
  );
}

export default GastoForm;
