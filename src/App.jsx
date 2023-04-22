import { useState } from 'react'

import { Form } from './components/Form'

export const App = () => {
  const [infos, setInfos] = useState(null)

  return (
    <div className='app'>
      <div className='header'>
        <h1 className='h1 mb-3'>Quickv React Components</h1>
        {infos ? <div className='alert'>{infos}</div> : null}
      </div>
      <div className='container'>
        <Form infos={infos} setInfos={setInfos} />
      </div>
    </div>
  )
}
