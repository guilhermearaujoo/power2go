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
        values={consultHistory().map((consult: ConsultHistoryModel) => [consult?.date, consult?.country, consult?.link])}
      />
    </Accordion>
  )
}

export default ConsultHistory
