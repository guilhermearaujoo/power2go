import React from 'react'
import Styles from './table-styles.scss'

interface TableProps {
  headers: string[]
  values: any[][]
}

const Table: React.FC<TableProps> = ({ headers, values }) => {
  return (
    <table className={Styles.table}>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {values.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((value, colIndex) => (
              <td key={colIndex}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
