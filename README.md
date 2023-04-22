# Quick-v Form Validation React Components

## QuickvInput Component

> The QuickvInput component is a React input field with quick validation capabilities.

### Usage

To use the QuickvInput component, simply import it into your React application and include it in your JSX code:

```jsx
import { QuickvInput } from 'quickv'

function MyForm() {
  return (
    <form>
      <QuickvInput
        labelContent='Name'
        qvRules='required|max:50'
        qvMessages='Please enter a name|Name must be less than 50 characters'
        name='name'
        qvInvalidClass='invalid-class'
        qvValidClass='valid-class'
        feedbackClass='feedback-class'
        fieldPlaceholder='Enter your name'
      />
    </form>
  )
}
```

### Props

The QuickvInput component accepts the following props:

| Name                 |  Type  | Required | Description                                                                 |
| -------------------- | :----: | :------: | --------------------------------------------------------------------------- |
| **labelContent**     | string |   true   | The label content for the input field.                                      |
| **qvRules**          | string |   true   | The quick validation rules separated by \|                                  |
| **qvMessages**       | string |   true   | The quick validation rules separated by \|                                  |
| **name**             | string |   true   | The name of the input field and associated label.                           |
| **qvInvalidClass**   | string |  false   | The CSS class to apply when the input field is invalid.                     |
| **qvValidClass**     | string |  false   | The CSS class to apply when the input field is valid.                       |
| **feedbackClass**    | string |  false   | The CSS class to apply to the div for displaying quick validation feedback. |
| **fieldPlaceholder** | string |  false   | The placeholder text for the input field.                                   |

### Others Rules

Validation Rules
The following validation rules are supported by the QuickvInput component:

- `required`: this rule ensures that the input field is not empty
- `min:value1,value2`: this rule ensures that the input value is greater than or equal to the minimum value(s) specified. Multiple minimum values can be specified by separating them with commas.
- `max:value1,value2`: this rule ensures that the input value is less than or equal to the maximum value(s) specified. Multiple maximum values can be specified by separating them with commas.
- `contains:value`: this rule ensures that the input value contains the specified substring.
- `minlength:minvalue`: this rule ensures that the length of the input value is greater than or equal to the specified minimum value.
- `maxlength:maxvalue`: this rule ensures that the length of the input value is less than or equal to the specified maximum value.
- `url`: this rule ensures that the input value is a valid URL.
- `in`:value1,value2,value3,value4...: this rule ensures that the input value is included in the specified list of values.

---

## QuickvForm Component

> The `QuickvForm` component is a form wrapper component that can contain `QuickvInput` components as children. It provides an easy way to validate and submit form data.

### Usage

```jsx
import { QuickvForm } from 'quickv'

const MyForm = () => {
  const handleSubmit = () => {
    // ...code
  }

  return (
    <QuickvForm onSubmit={handleSubmit}>
      <QuickvInput
        labelContent='Name'
        name='name'
        qvRules='required'
        qvMessages='Please enter your name'
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
    </QuickvForm>
  )
}
```

### Props

The QuickvForm component accepts the following props:

| Name                 |   Type   | Required | Description                                           |
| -------------------- | :------: | :------: | ----------------------------------------------------- |
| **onSubmit**         | Function |   true   | The function to call when the form is submitted.      |
| **formName**         |  string  |  false   | The name of the form. Must be unique within the page. |
| **formId**           |  string  |  false   | The id of the form. Must be unique within the page.   |
| **submitButtonText** |  string  |  false   | The text to display on the submit button.             |

### Example

```jsx
import { QuickvForm, QuickvInput } from 'quickv'

const MyForm = () => {
  const handleSubmit = (formData) => {
    console.log(formData)
  }

  return (
    <QuickvForm
      formName='my-form'
      formId='my-form'
      submitButtonText='Soumettre'
      onSubmit={handleSubmit}
    >
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
  )
}
```

---

### License

This project is licensed under the MIT License. See the LICENSE file for details.

### Credits

These components were developed by [Meschack Gbewezoun](https://github.com/Meschack) in collaboration with [Claude Fassinou](https://github.com/Claudye) for [Quick-v](https://github.com/quick-v).

Demo : [Quick-v Demo](https://meschack.github.io/quickv-test)
