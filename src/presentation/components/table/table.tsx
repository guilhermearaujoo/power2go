import React from 'react'
import Styles from './table-styles.scss'
import { HiBan } from 'react-icons/hi'

interface TableProps {
  headers: string[]
  values: any[][]
}

const Table: React.FC<TableProps> = ({ headers, values }) => {
  return values.length === 0
    ? (
    <div className={Styles.emptyTable}>
      <HiBan height={30} width={30} />
      <span>Nenhum resultado encontrado</span>
    </div>
      )
    : (
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
            {row.map((value, colIndex) =>
              colIndex === row.length - 1
                ? (
                <td key={colIndex}>
                  <a href={value} target="_blank" rel="noreferrer">
                    {value}
                  </a>
                </td>
                  )
                : (
                <td key={colIndex}>{value}</td>
                  )
            )}
          </tr>
        ))}
      </tbody>
    </table>
      )
}

export default Table
