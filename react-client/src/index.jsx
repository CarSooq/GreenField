import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import About from './components/about.jsx';
import Footer from './components/footer.jsx'
import Box from '@material-ui/core/Box' ;
import LogoText from './components/logotext.jsx'
import { styled } from '@material-ui/core/styles';
import Search from './components/Search.jsx';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import { Menu, AccountCircle } from '@material-ui/icons';

var MyBox = styled(Box)({
  color : '#1a237e'
})
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cars: []}
  }



  //Method that handles the "brand" submit input with ajax post request to the server
     handleSubmit(object) {
    console.log(object, "Was chosen")
    var that = this
    $.ajax({
      url: '/search',
      method: 'POST',
      data: JSON.stringify({object}),
      contentType: 'application/json',
      success:function (data) {
        console.log("post method successeded")
        that.updateState(data)
        console.log(data, "hii im from get for the data in post request react")
      },
      error: function () {console.log("brand post method failed")}
    });
  }
  //instead of doing a get request use this to get the data in the post request inside the success function
  updateState(data){
    this.setState({cars: data})
  }

  render () {
    return (
      <MyBox>
      <div>
      <span><img src = "https://scontent.famm5-1.fna.fbcdn.net/v/t1.0-9/128255422_227091088758997_7058702321390752154_n.jpg?_nc_cat=108&ccb=2&_nc_sid=730e14&_nc_eui2=AeEqFQYaN_ad4f9gK-R_00w0xeq3jpBC8OPF6reOkELw4wT-RH0yveh5W6rCgR4sTojyscWbVB4AC485fRaU9tmG&_nc_ohc=ige5aDJwuj0AX_nHzs2&_nc_oc=AQmh70KqaJc_XuRjsXfrEZ2TFCRNhUgAlWxjabqZ2UOrLvolXf7W1N34wTttPuSPf14&_nc_ht=scontent.famm5-1.fna&oh=aaea198d1eb4f019d2c150895411b2c1&oe=5FE68806"  width="250" height="125"></img><LogoText/></span>
      < About/><br></br>
        <Search
        onSubmit = {this.handleSubmit.bind(this)}
        cars = {this.state.cars}/>
        <Footer/>
      </div>
      </MyBox>
    )}
}

ReactDOM.render(<App/>, document.getElementById('app'));