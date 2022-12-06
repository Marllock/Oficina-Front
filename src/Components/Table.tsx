import React from "react";


const Tabela = ({
  data = undefined,
  columns = null ,
  hover = true,
  striped = true,
}) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns}
          </tr>
        </thead>
        <tbody>
          {data}
        </tbody>
      </table>
      {data ? null : <p>No Row to show :)</p>}
    </div>
  );
};

export default Tabela;