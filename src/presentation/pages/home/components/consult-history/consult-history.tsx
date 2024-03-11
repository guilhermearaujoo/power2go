import React from 'react'
import { Table, Accordion } from '@/presentation/components'
import { Context } from '@/main/factories/context/context'
import { ConsultHistoryModel } from '@/domain/models'

const ConsultHistory: React.FC = () => {
  const { consultHistory } = React.useContext(Context)

  return (
    <Accordion title="Histórico de consultas">
      <Table
        headers={['Data', 'País', 'Link']}
        values={consultHistory().map((consult: ConsultHistoryModel, index: number) => [
          consult?.date,
          consult?.country,
          <a href={consult?.link} key={index}>
            {consult?.link}
          </a>
        ])}
      />
    </Accordion>
  )
}

export default ConsultHistory
