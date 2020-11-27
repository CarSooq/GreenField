import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {brand: "", year: "", price: ""}
  }

 onChangeBrandHandler(event) {
   this.setState ({brand: event.target.value});
 }
 onChangeYearHandler(event){
   this.setState ({year: event.target.value})
}
 onChangePriceHandler(event){
   this.setState ({price: event.target.value})
 }

 onClickBrandHanlder(event){
     this.props.onSubmitB(this.state.brand)
   }
 onClickYearHanlder(event) {
   this.props.onSubmitY(this.state.year)
 }
 onClickPriceHanlder(event) {
   this.props.onSubmitP(this.state.price)
 }

 render() {
   return(
 <div>
    <input placeholder = "search by brand.." value = {this.state.brand} onChange= {this.onChangeBrandHandler.bind(this)}/>
    <button onClick = {this.onClickBrandHanlder.bind(this)}> search </button> <br/>
    <input type= "number" placeholder= "search by year.." value = {this.state.year}
onChange= {this.onChangeYearHandler.bind(this)}/>
    <button onClick={this.onClickYearHanlder.bind(this)}> search </button> <br/>

    <input type= "number" placeholder= "search by price.." value = {this.state.price}
onChange= {this.onChangePriceHandler.bind(this)}/>
    <button onClick={this.onClickPriceHanlder.bind(this)}> search </button>
 </div>)

}





