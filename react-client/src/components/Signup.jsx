import React from 'react';
import TextField from '@material-ui/core/TextField';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Footer from './footer.jsx'
var MyInput = styled(TextField)({
  color : "#0A194F"
})
// var MyButton = styled(Button)({
//   padding : "10px 10px 10px 10px"
// })
export default class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {username: "", password: ""}
  }
  render() {
    return(
  <div>
    <form>
      <p>First name:<MyInput id="outlined-basic" label="First name" variant="outlined" /></p>

      <p>Last name:<MyInput id="outlined-basic" label="Last name" variant="outlined" /></p>
      <p>Email: <MyInput id="outlined-basic" label="Email" variant="outlined" /></p>
      <p>Password: <MyInput id="outlined-basic" label="Password"  type="password" variant="outlined" /></p>
      <p>Confirm password: <MyInput id="outlined-basic" label="Confirm password" variant="outlined" /></p>
      <p><Button variant="contained" color="primary"   fullWidth>
             Sign Up
            </Button></p>
            <Footer/>
    </form>
  </div>)}
}


















