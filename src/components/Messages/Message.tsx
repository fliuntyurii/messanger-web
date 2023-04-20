type Props = {
  message: string
}

export const Message = ({ message }: Props) => {
  return (
    <>
      { message && <div className='success-message'>{message}</div> }
    </>
  )
}