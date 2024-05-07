import React from 'react'

const JoinTheTeam = () => {
  return (
    <div>
        <p>Join The Team</p>
        <form>
            <input type="text" name='name' placeholder='Full Name'/>
            <input type="email" name='email' placeholder='Email'/>
            <textarea name="message" id="message" placeholder='Message'></textarea>
        </form>
    </div>
  )
}

export default JoinTheTeam