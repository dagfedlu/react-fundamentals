// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import {useState} from 'react'

function UsernameForm({onSubmitUsername}) {
  const [uname, setUname] = useState(null)
  // event handler
  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(uname)
  }
  const handleChange = e => {
    const value = e.target.value.toLowerCase()
    setUname(value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userName">Username:</label>
        <input
          id="userName"
          type="text"
          onChange={handleChange}
          value={uname}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
