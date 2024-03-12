import Styles from './consult-history-styles.scss'
import { Table, Accordion } from '@/presentation/components'
import { Context } from '@/main/factories/context/context'
import { ConsultHistoryModel } from '@/domain/models'
import CsvDownload from 'react-csv-downloader'

import React, { useCallback } from 'react'

const ConsultHistory: React.FC = () => {
  const { consultHistory } = React.useContext(Context)

  const columns = [
    { id: 'date', dispplayName: 'Date' },
    { id: 'country', dispplayName: 'Country' },
    { id: 'link', dispplayName: 'Link' }
  ]

  const datas = useCallback(() =>
    consultHistory().map((consult: ConsultHistoryModel) => ({
      date: consult?.date,
      country: consult?.country,
      link: consult?.link
    })), [consultHistory])

  return (
    <Accordion title="Consult History">
      <Table
        headers={columns.map((column) => column.dispplayName)}
        values={datas()
          .map((data: ConsultHistoryModel) => [
            data.date,
            data.country,
            <a href={data.link} key={data.country}>
              {data.link}
            </a>
          ])
          .reverse()}
      />

        <CsvDownload
          extension=".csv"
          filename={'consult-history_' + new Date().toLocaleDateString()}
          columns={columns}
          datas={datas}
          text="Export CSV"
          className={Styles.dowloadButton}
        />
    </Accordion>
  )
}

export default ConsultHistory
