import React, { useState } from "react";
import { Cell, Column, Table } from "@blueprintjs/table";

const cellRenderer = rowIndex => {
  return <Cell>{`$${(rowIndex * 10).toFixed(2)}`}</Cell>;
};

export default () => {
  const [numRows, setNumRows] = useState(50);

  const infiniteLoad = ({ rowIndexEnd }) =>
    rowIndexEnd + 1 >= numRows && setNumRows(numRows + 50);

  return (
    <div style={{ height: "500px" }}>
      <Table numRows={numRows} onVisibleCellsChange={infiniteLoad}>
        <Column name="Dollars" cellRenderer={cellRenderer} />
      </Table>
    </div>
  );
};
