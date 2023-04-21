import { useState } from 'react'
import '../assets/styles/Form.css'

export const Form = () => {
  const [infos, setInfos] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    const form = new FormData(e.target)

    const name = form.get('name')
    const age = form.get('age')
    const websiteUrl = form.get('url')
    const lang = form.get('lang')

    const userInformations = (
      <>
        <p>Nom : {name}</p>
        <p>Age : {age}</p>
        <p>Lien du site : {websiteUrl}</p>
        <p>Langue choisie : {lang}</p>
      </>
    )

    setInfos((i) => userInformations)
  }

  return (
    <div>
      {infos ? <div className='alert'>{infos}</div> : null}
      <form action='' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name' className='form-label'>
            Enter your name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            placeholder='At least 2 characters, at most 20'
            data-qv-rules='required|minlength:3|maxlength:20'
            data-qv-messages='The name is required | The name should be at least 3 characters | The field size should not exceed 20 characters'
            data-qv-invalid-class='invalid-class'
            data-qv-valid-class='valid-class'
          />
          <div data-qv-feedback='name' className='feedback'></div>
        </div>

        <div className='form-group'>
          <label htmlFor='age'>Enter your age</label>
          <input
            type='text'
            name='age'
            id='age'
            data-qv-rules='required|integer|between:18,28'
            data-qv-messages='The age is required | The age should be a number | The age should be between 18 and 28'
            placeholder='Enter your age (between 18 and 28)'
            data-qv-invalid-class='invalid-class'
            data-qv-valid-class='valid-class'
          />

          <div data-qv-feedback='age' className='feedback'></div>
        </div>

        <div className='form-group'>
          <label htmlFor='url'>Enter your website URL</label>
          <input
            type='text'
            id='url'
            name='url'
            data-qv-rules='required|url'
            data-qv-messages='The URL is required | Your URL is not valid'
            data-qv-invalid-class='invalid-class'
            data-qv-valid-class='valid-class'
            placeholder='Ex : (https://example.com)'
          />
          <div data-qv-feedback='url' className='feedback'></div>
        </div>

        <div className='form-group'>
          <label htmlFor='lang'>Choose language</label>
          <input
            type='text'
            id='lang'
            name='lang'
            data-qv-rules='required|in:Français,Anglais'
            data-qv-messages='The lan field is required | This language is not authorized'
            data-qv-invalid-class='invalid-class'
            data-qv-valid-class='valid-class'
            placeholder='Français | Anglais'
          />
          <div data-qv-feedback='lang' className='feedback'></div>
        </div>

        <button data-qv-submit className='btn'>
          Submit
        </button>
      </form>
    </div>
  )
}
