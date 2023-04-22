import { useState } from 'react'
import { QuickvForm } from './QuickvForm'
import { QuickvInput } from './QuickvInput'

const frenchKeys = {
  name: 'Nom',
  age: 'Âge',
  url: 'Lien du site',
  lang: "Langue d'affichage",
}

const englishKeys = {
  name: 'Name',
  age: 'Age',
  url: 'Link to the website',
  lang: 'Display language',
}

export const Form = ({ infos, setInfos }) => {
  const [keysObject, setKeysObject] = useState(englishKeys)

  const handleSubmit = (event) => {
    const form = new FormData(event.target)

    const name = form.get('name')
    const age = form.get('age')
    const websiteUrl = form.get('url')
    const lang = form.get('lang')

    setKeysObject(lang == 'English' ? frenchKeys : englishKeys)

    const userInformations = (
      <>
        <p>
          {keysObject.name} : {name}
        </p>
        <p>
          {keysObject.age} : {age}
        </p>
        <p>
          {keysObject.url} : <a href={websiteUrl}>{websiteUrl}</a>
        </p>
        <p>
          {keysObject.lang} : {lang}
        </p>
      </>
    )

    setInfos((i) => userInformations)
  }

  return (
    <div>
      <QuickvForm submitButtonText='Soumettre' onSubmit={handleSubmit}>
        <QuickvInput
          name='name'
          fieldPlaceholder='At least 2 characters, at most 20'
          qvRules='required|minlength:3|maxlength:20'
          qvMessages='The name is required | The name should be at least 3 characters | The field size should not exceed 20 characters'
          qvInvalidClass='invalid-class'
          qvValidClass='valid-class'
          labelContent='Enter your name'
          feedbackClass='feedback'
        />

        <QuickvInput
          name='age'
          qvRules='required|integer|between:18,28'
          qvMessages='The age is required | The age should be a number | The age should be between 18 and 28'
          fieldPlaceholder='Enter your age (between 18 and 28)'
          qvInvalidClass='invalid-class'
          qvValidClass='valid-class'
          feedbackClass='feedback'
          labelContent='Enter your age'
        />

        <QuickvInput
          labelContent='Enter your website URL'
          qvRules='required|url'
          qvMessages='The URL is required | Your URL is not valid'
          qvInvalidClass='invalid-class'
          qvValidClass='valid-class'
          name='url'
          feedbackClass='feedback'
          fieldPlaceholder='Ex : (https://example.com)'
        />

        <QuickvInput
          type='text'
          id='lang'
          name='lang'
          qvRules='required|in:French,English'
          qvMessages='The language field is required | This language is not authorized'
          qvInvalidClass='invalid-class'
          qvValidClass='valid-class'
          fieldPlaceholder='French | English'
          labelContent='Choose your language'
          feedbackClass='feedback'
        />
      </QuickvForm>
    </div>
  )
}
