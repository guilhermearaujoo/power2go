import React, { memo } from 'react'
import Styles from './table-styles.scss'
import { NotFound } from '@/presentation/components'
type TableProps = {
  headers: string[]
  values: any[][]
}

const Table: React.FC<TableProps> = ({ headers, values }) => {
  return values?.length === 0 || values[0]?.[0] === undefined
    ? (
    <NotFound />
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
            {row?.map((value, colIndex) => (
              <td key={colIndex}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
      )
}

export default memo(Table)
