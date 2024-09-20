import React from 'react';
import { Typography } from '@mui/material';

function TotalGastos({ gastos }) {
  const totalGasto = gastos
    .reduce((total, item) => total + parseFloat(item.valor || 0), 0)
    .toFixed(2);

  return (
    <Typography variant="h6">
      Total Gasto: R$ {totalGasto}
    </Typography>
  );
}

export default TotalGastos;
