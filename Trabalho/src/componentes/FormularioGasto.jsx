import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function FormularioGasto({ adicionarGasto }) {
  const [gasto, setGasto] = useState({ nome: '', data: '', valor: '' });

  const lidarComMudanca = (e) => {
    const { name, value } = e.target;
    setGasto({ ...gasto, [name]: value });
  };

  const enviarFormulario = () => {
    adicionarGasto(gasto);
    setGasto({ nome: '', data: '', valor: '' });
  };

  return (
    <div>
      <TextField
        label="Nome"
        name="nome"
        value={gasto.nome}
        onChange={lidarComMudanca}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Data"
        name="data"
        type="date"
        value={gasto.data}
        onChange={lidarComMudanca}
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
        onChange={lidarComMudanca}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={enviarFormulario}>
        Adicionar Gasto
      </Button>
    </div>
  );
}

export default FormularioGasto;
