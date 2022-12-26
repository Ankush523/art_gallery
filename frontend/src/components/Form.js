import React, { useState } from 'react'
import FileBase from 'react-file-base64'
const Form = () => {
  const [postData, setPostData] = useState({
    creator : '',
    title: '',
    message: '',
    tage: '',
    selectedFile: ''
  })
  return (
    <div>
      <div>
        <FileBase 
          type="file"
          multiple= {false}
          onDone={({base64}) => setPostData({...postData, selectedFile:base64})}
        />
      </div>
    </div>
  )
}

export default Form