import React, { useEffect, useState } from 'react'

const ActionMessage = ({message, delay}) => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    setTimeout(() => {setVisible(false)}, delay)
  }, [delay])

  return visible && <p>{message}</p>
}

export default ActionMessage