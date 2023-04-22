import '../assets/styles/QuickvInput.css'

/**
 * QuickvInput component to display an input field with quick validation.
 *
 * @param {Object} props - The properties for the component.
 * @param {string} props.labelContent - The label content for the input field.
 * @param {string} props.qvRules - The quick validation rules separated by pipe symbol.
 * @param {string} props.qvMessages - The quick validation messages separated by pipe symbol.
 * @param {string} props.qvInvalidClass - The CSS class to apply when the input field is invalid.
 * @param {string} props.qvValidClass - The CSS class to apply when the input field is valid.
 * @param {string} props.name - The name of the input field and associated label.
 * @param {string} props.feedbackClass - The CSS class to apply to the div for displaying quick validation feedback.
 * @param {string} props.fieldPlaceholder - The placeholder text for the input field.
 * @returns {JSX.Element} The QuickvInput React component.
 */

export const QuickvInput = ({
  labelContent,
  qvRules,
  qvMessages,
  qvInvalidClass,
  qvValidClass,
  name,
  feedbackClass,
  fieldPlaceholder,
}) => {
  return (
    <div className='form-group'>
      <label htmlFor={name}>{labelContent}</label>
      <input
        type='text'
        id={name}
        name={name}
        data-qv-rules={qvRules}
        data-qv-messages={qvMessages}
        data-qv-invalid-class={qvInvalidClass}
        data-qv-valid-class={qvValidClass}
        placeholder={fieldPlaceholder}
      />
      <div data-qv-feedback={name} className={feedbackClass}></div>
    </div>
  )
}
