/**
 * Submit button for the QuickvForm component
 * @param {Object} props - The props object for the QuickvSubmitButton component.
 * @param {string} [props.submitButtonText="Submit"] - The submit button text content
 * @param {string} [props.submitButtonStyleClassName="btn"] - The submit button style class
 * @returns {JSX.Element}  The QuickvSubmitButton component.
 */
export const QuickvSubmitButton = ({
  submitButtonText = 'Submit',
  submitButtonStyleClassName = 'btn',
}) => {
  return (
    <button data-qv-submit className={submitButtonStyleClassName}>
      {submitButtonText}
    </button>
  )
}
