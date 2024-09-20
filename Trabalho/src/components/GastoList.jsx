import React from 'react';
import { List, ListItem, ListItemText, Button } from '@mui/material';

function GastoList({ gastos, removerGasto }) {
  return (
    <List>
      {gastos.map((gasto, index) => (
        <ListItem key={index}>
          <ListItemText
            primary={`${gasto.nome} - R$ ${gasto.valor}`}
            secondary={`Data: ${gasto.data}`}
          />
          <Button color="secondary" onClick={() => removerGasto(index)}>
            Remover
          </Button>
        </ListItem>
      ))}
    </List>
  );
}

export default GastoList;
