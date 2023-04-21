import { useEffect } from 'react'
import { Form } from './components/Form'
import '/src/libs/Quickv/quickv.js'

export const App = () => {
  useEffect(() => {
    const qv = new Qv('form')
    qv.init()
  }, [])

  return (
    <div className='container'>
      <h1 className='h1 mb-3'>Quickv test with React Components</h1>
      <Form />
    </div>
  )
}
