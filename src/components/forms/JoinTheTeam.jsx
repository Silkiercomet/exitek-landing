import style from "./jointheteam.module.css"

const JoinTheTeam = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    return
  }
  return (
    <div className={` ${style.join}`}>
        <p className={style.header}>Join The Team</p>
        <form>
            <input type="text" name='name' placeholder='Full Name'/>
            <input type="email" name='email' placeholder='Email'/>
            <textarea rows={4} type="text" name='message' placeholder='Message'/>
            <p className={style.bottomLine}>By filling in this form you agree to the processing of your personal data by Exitek. Provided data is processed for recruitment purposes. You can withdraw your consent to the processing of your personal data at any time. For more information on your rights and data processing please read our Privacy Policy.</p>
            <button type="submit" onClick={(e) => handleSubmit(e)}>Apply Now</button>
        </form>
      
    </div>
  )
}

export default JoinTheTeam