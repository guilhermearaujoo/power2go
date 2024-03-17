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
    <>
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

      <div className={Styles.responsiveTable}>
        {values.map((row, rowIndex) => (
          <div key={rowIndex} className={Styles.responsiveRow}>
            {row?.map((value, colIndex) => (
              <div key={colIndex} className={Styles.responsiveCell}>
                <span className={Styles.responsiveHeader}>{headers[colIndex]}:</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
      )
}

export default memo(Table)
