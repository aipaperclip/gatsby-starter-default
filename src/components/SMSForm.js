import React from "react"

class SMSForm extends React.Component {
 constructor(props) {
   super(props)
   this.state = {
     buttonDisabled: true,
     message: { to: "", body: "" },
     submitting: false,
     error: null,
   }
 }

 onChange = event => {
   const name = event.target.getAttribute("name")
   this.setState({
     message: { ...this.state.message, [name]: event.target.value },
   })
 }
 render() {
   return (
     <>
       <div>{this.state.error}</div>
       <form
         style={{
           display: `flex`,
           flexDirection: `column`,
           maxWidth: `500px`,
         }}
         method="post"
       >
         <label htmlFor="to">To:</label>
         <input
           type="tel"
           name="to"
           id="to"
           value={this.state.message.to}
           onChange={this.onChange}
         ></input>
         <label htmlFor="body">Body:</label>
         <textarea
           name="body"
           id="body"
           value={this.state.message.body}
           onChange={this.onChange}
           maxLength="160"
         />
         <button
           style={{
             marginTop: `7px`,
           }}
           type="submit"
           disabled={this.state.submitting}
         >
           Send message
         </button>
       </form>
     </>
   )
 }
}

export default SMSForm
