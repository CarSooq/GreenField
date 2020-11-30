import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Footer from './footer.jsx'
export default class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {username: "", password: ""}
  }
  render() {
    return(
  <div>
     <form>
       <p>Email Address:</p>
       <TextField    variant="outlined"  margin="normal" required fullWidth label="Email Address" autoFocus/>
       <p>Password:</p>
       <TextField variant="outlined" margin="normal" required fullWidth label="Password" type="password" />
       <p>Create account?.. <Button variant="contained" color="primary"   fullWidth>
             Sign In
            </Button></p>
     </form>
     <Footer/>
  </div>
  )}
}

























































































