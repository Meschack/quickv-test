import React from 'react'
import { QuickvSubmitButton } from './QuickvSubmitButton'

/**
 * QuickvForm is a reusable React component for creating forms with QuickvInput components.
 * It provides an easy way to manage form data and validation.
 * @param {Object} props - The props object for the QuickvForm component.
 * @param {string} props.formName - The name of the form. Must be unique within the page.
 * @param {string} props.formId - The id of the form. Must be unique within the page.
 * @param {string} props.submitButtonText - The text to display on the submit button.
 * @param {Function} props.onSubmit - The function to call when the form is submitted.
 * @returns {JSX.Element} The QuickvForm component.
 */
export const QuickvForm = ({
  formName,
  formId,
  submitButtonText,
  onSubmit,
  children,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    if (onSubmit) {
      onSubmit(event)
    }
  }

  return (
    <form id={formId} name={formName} onSubmit={handleSubmit}>
      {children}
      <QuickvSubmitButton submitButtonText={submitButtonText} />
    </form>
  )
}
