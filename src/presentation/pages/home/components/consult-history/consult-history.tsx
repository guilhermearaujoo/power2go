import Styles from './consult-history-styles.scss'
import { Table, Accordion } from '@/presentation/components'
import { Context } from '@/main/factories/context/context'
import { ConsultHistoryModel } from '@/domain/models'
import CsvDownload from 'react-csv-downloader'

import Pagination from '@mui/material/Pagination'
import { BiCloudDownload } from 'react-icons/bi'

import React, { useCallback } from 'react'

const ConsultHistory: React.FC = () => {
  const { consultHistory } = React.useContext(Context)
  const [page, setPage] = React.useState(1)

  const columns = [
    { id: 'date', dispplayName: 'Date' },
    { id: 'country', dispplayName: 'Country' },
    { id: 'link', dispplayName: 'Link' }
  ]

  const datas = useCallback(
    () =>
      consultHistory()
        .map((consult: ConsultHistoryModel) => ({
          date: consult?.date,
          country: consult?.country,
          link: (
            <a href={consult.link} key={consult.country}>
              {consult.link}
            </a>
          )
        }))
        .reverse(),
    [consultHistory]
  )

  const handleChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ): void => {
    setPage(value)
  }

  return (
    <Accordion title="Consult History" aditionalClass={Styles.accordion} >
      <Table
        headers={columns.map((column) => column.dispplayName)}
        values={new Array(5).fill(0).map((_, index) => {
          const consult = datas()[index + (page - 1) * 5]
          return consult ? [consult.date, consult.country, consult.link] : []
        })}
      />

      <div className={Styles.dowloadWrapper} title='Dowload CSV'>
        <CsvDownload
          extension=".csv"
          filename={'consult-history_' + new Date().toLocaleDateString()}
          columns={columns}
          datas={datas}
          text="."
          className={Styles.dowloadButton}
        />
        <button className={Styles.downloadIcon}>
          <BiCloudDownload />
        </button>
      </div>

      <div className={Styles.pagination}>
        <Pagination
          count={Math.ceil(datas().length / 5) || 1}
          page={page}
          onChange={handleChange}
        />
      </div>
    </Accordion>
  )
}

export default ConsultHistory
