import React from 'react';
import { List, ListItem, ListItemText, Button } from '@mui/material';

function ListaGastos({ gastos, removerGasto }) {
  return (
    <List>
      {gastos.map((gasto, indice) => (
        <ListItem key={indice}>
          <ListItemText
            primary={`${gasto.nome} - R$ ${gasto.valor}`}
            secondary={`Data: ${gasto.data}`}
          />
          <Button color="secondary" onClick={() => removerGasto(indice)}>
            Remover
          </Button>
        </ListItem>
      ))}
    </List>
  );
}

export default ListaGastos;
