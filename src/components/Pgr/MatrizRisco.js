import React from 'react';

function MatrizRisco() {
  return (
    <table className="matriz-risco">
      <thead>
        <tr>
        <th>Matriz de Risco 5x5 Baseada na Metodologia AIHA</th>
        <th>Severidade</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <table style={{width:"100px"}}>
              <thead>
                <tr>
                  <td>Probabilidade</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Muito provável</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>Provável</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>Possível</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Pouco provável</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Rara</td>
                  <td>1</td>
                </tr>
              </tbody>
            </table>
          </td>
          <td>
            <tr>
              <td>Leve</td>
              <td>Baixa</td>
              <td>Moderada</td>
              <td>Alta</td>
              <td>Extrema</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Muito provável</td>
              <td>5</td>
              <td>5</td>
              <td>10</td>
              <td>15</td>
              <td>20</td>
              <td>25</td>
            </tr>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default MatrizRisco;
