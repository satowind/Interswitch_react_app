import React, { Component } from 'react';

let  color = {
    color: '#000',
    textAlign: 'center',
    padding: '10px 20px'
  };

  let position ={
      position:'absolute',
      left:'30%',
      top:'5%',
      background:'white',
      border:'2px solid rgba(0,0,0,0.3)',
      borderRadius:'30px',
      padding:'2%'
  }


  

class Datefilter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      value: 'Today',
      wind: '',
      color:'black',
      bgColor:'white',
      active:'null'
    };
  }

  getInitialState(){
    return { active: null}
  }

  toggle(a){
    if (this.state.active === a) {
      this.setState({active : null})
    } else {
      this.setState({active : a})
    }
  }
  
  myColor(a) {
    if (this.state.active === a) {
      return "black";
    }
    return "";
  }

  color(a) {
    if (this.state.active === a) {
      return "white";
    }
    return "";
  }

  rad(a) {
    if (this.state.active === a) {
      return "10px";
    }
    return "";
  }

  pad(a) {
    if (this.state.active === a) {
      return "10px 15px";
    }
    return "";
  }

  
  expand() {
    this.setState({ expanded: true });
  }
  
  collapse() {
    this.setState({ expanded: false });
  }
  
  handleItemClick(e) {
      if(e === ''){
        this.setState({
            expanded: false,
            value: 'Today',
            bgColor:'',
            color:''
          });
      }else if( e == 'Today'){
        let date = new Date().getDate();
        let months = new Date().getMonth()+1;
        let month;
         if(months ==1 ){
            month ='January'
         }else if(months==2){
            month ='Febuary'
         }else if(months==3){
            month ='March'
         }else if(months==4){
            month ='April'
         }else if(months==5){
            month ='May'
         }else if(months==6){
            month ='June'
         }else if(months==7){
            month ='July'
         }else if(months==8){
            month ='August'
         }else if(months==9){
            month ='September'
         }else if(months==10){
            month ='October'
         }else if(months==11){
            month ='November'
         }else {
            month ='December'
         }
 
       let me =date + ' ' + month ;
        this.setState({
            expanded: false,
            value: e +': '+me,
            bgColor:'',
            color:''
            
            
          });
      }else if(e === 'Yesterday'){
        let date = new Date().getDate()-1;
        let months = new Date().getMonth()+1;
        let month;
         if(months ==1 ){
            month ='January'
         }else if(months==2){
            month ='Febuary'
         }else if(months==3){
            month ='March'
         }else if(months==4){
            month ='April'
         }else if(months==5){
            month ='May'
         }else if(months==6){
            month ='June'
         }else if(months==7){
            month ='July'
         }else if(months==8){
            month ='August'
         }else if(months==9){
            month ='Sept'
         }else if(months==10){
            month ='October'
         }else if(months==11){
            month ='November'
         }else {
            month ='December'
         }
 
       let me =date + ' ' + month ;
        this.setState({
            expanded: false,
            value: e +': '+me,
            bgColor:'',
            color:''
            
            
          });
      }else{
        this.setState({
            expanded: false,
            value: e,
            bgColor:'',
            color:''
            
            
          });
      }
    
  }

 

  handleItemClicks(e) {

    e.target.backgroundColor = 'Black';
      
     this.setState({
        wind :  e.target.innerText,
        //bgColor:'black',
        //color:'white'
     })
    
     
  }

  cancelClick(){
    this.setState({
        expanded: false,
      });
  }
  
  handleTriggerClick() {
    this.setState({ expanded: !this.state.expanded });
  }
  
  render() {
    let dropdown = undefined;
    if (this.state.expanded) {
      dropdown = (
        <div className="date-filter" style={position}>
        {
          this.props.options.map((item, o) => {
            return <h4 className='backg' style={color }  onClick={(e) => { this.handleItemClicks(e); }} className="date-day"><span  style={{background: this.myColor(o), padding: this.pad(o), borderRadius: this.rad(o),color:this.color(o), cursor:'pointer'}} onClick={() => {this.toggle(o)}}>{item}</span></h4>;
            
          })
        }
        <br/>

        <span onClick={(e) => { this.handleItemClick(this.state.wind); }}  className='sato to_red x_small'>Apply</span> 
        &nbsp;&nbsp;
        <button onClick={(e) => { this.cancelClick(); }} className='sato to_whitesmokess x_small'>Cancel</button>
        </div>
      );
    }
return (
      <div className={`dropdown ${this.state.expanded ? 'active' : ''}`} tabIndex="0" 
      onBlur={() => { this.collapse(); }}>
        <div className="trigger" onClick={() => { this.handleTriggerClick(); }}>
          {this.state.value}
        </div>
        {dropdown}
      </div>
    );
  }
}

export default Datefilter;

