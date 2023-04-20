type Props = {
  error: string
}

export const ErrorMessage = ({ error }: Props) => {
  return (
    <>
      { error && <div className='error-message'>{error}</div> }
    </>
  )
}