import React, { Component } from 'react';


import './table.css';

import Footer from '../components/footer';
import Header from '../components/header';
import Navbar from '../components/nav';
import Td from '../components/td';
import Datefilter from '../components/datepicker';


import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'


class Table extends Component {
    oldData = [
        {id: "1", firstname: "sato", lastname: "wind", email: "evensatowind@gmail.com",phone:"08038385263",last_login_date: "monday"},
        {id: "2", firstname: "ebuka", lastname: "divine", email: "divine@gmail.com",phone:"54521347890",last_login_date: "friday"},
        {id: "3", firstname: "emeka", lastname: "gospel", email: "gospel@gmail.com",phone:"0987654321",last_login_date: "thursday"},
        
        {id: "4", firstname: "oge", lastname: "kim", email: "kim@gmail.com",phone:"64310677432",last_login_date: "sunday"},
        {id: "5", firstname: "philip", lastname: "chino", email: "chino@gmail.com",phone:"09984342211",last_login_date: "wednesday"},
        {id: "6", firstname: "tim", lastname: "shino", email: "tim@gmail.com",phone:"02035353211",last_login_date: "sunday"},
        {id: "7", firstname: "andrew", lastname: "bisi", email: "andrew@gmail.com",phone:"0203344678",last_login_date: "monday"},
        {id: "8", firstname: "teslim", lastname: "bola", email: "bola@gmail.com",phone:"01000765464",last_login_date: "tuesday"},
        {id: "9", firstname: "jude", lastname: "miracle", email: "miracle@gmail.com",phone:"050456732234",last_login_date: "thursday"},
        {id: "10", firstname: "wind", lastname: "assurace", email: "wind@gmail.com",phone:"060323454545",last_login_date: "thursday"},
        {id: "11", firstname: "too", lastname: "chioma", email: "too@gmail.com",phone:"09011223234",last_login_date: "saturday"},
        {id: "12", firstname: "ogo", lastname: "glory", email: "ogo@gmail.com",phone:"060555333546",last_login_date: "saturday"},
        {id: "13", firstname: "ogugua", lastname: "inter", email: "inter@gmail.com",phone:"07033435456",last_login_date: "friday"},
        {id: "14", firstname: "yinka", lastname: "uba", email: "uba@gmail.com",phone:"0805543544565",last_login_date: "thursday"},
        {id: "15", firstname: "ebuka", lastname: "interswitch", email: "ebuka@gmail.com",phone:"0905555334242",last_login_date: "sunday"},
        {id: "16", firstname: "kc", lastname: "atiku", email: "atiku@gmail.com",phone:"0704443335565",last_login_date: "wednesday"},
        {id: "17", firstname: "oyedepo", lastname: "buhari", email: "buhari@gmail.com",phone:"080555643221",last_login_date: "wednesday"},
        {id: "18", firstname: "adeboye", lastname: "kalu", email: "kalu@gmail.com",phone:"080555444565",last_login_date: "tuesday"},
        {id: "19", firstname: "bisi", lastname: "kali", email: "kali@gmail.com",phone:"0880007777",last_login_date: "monday"},
        {id: "20", firstname: "anthony", lastname: "rock", email: "rock@gmail.com",phone:"1234567890",last_login_date: "friday"},
      ]
   
    constructor(props){
        super(props);
        this.search = this.search.bind(this);
        this.get = this.get.bind(this);
        this.state = {
            user: this.oldData
        }
    }

    search(e){
        const g = e.target.value;
        if (!g) {
            this.setState({ user: this.oldData });
        return false;
        }
        
        const newData1  = this.oldData.filter(u => {
            let result = u.last_login_date.toLowerCase().indexOf(g.toLowerCase()) > -1;
            return result;
        });

        const newData2  = this.oldData.filter(u => {
            let result = u.firstname.toLowerCase().indexOf(g.toLowerCase()) > -1;
            return result;
        });

        const newData3  = this.oldData.filter(u => {
            let result = u.lastname.toLowerCase().indexOf(g.toLowerCase()) > -1;
            return result;
        });

        const newData4  = this.oldData.filter(u => {
            let result = u.email.toLowerCase().indexOf(g.toLowerCase()) > -1;
            return result;
        });

        const newData5  = this.oldData.filter(u => {
            let result = u.phone.toLowerCase().indexOf(g.toLowerCase()) > -1;
            return result;
        });

        let newData6 = (((newData1.concat(newData2)).concat(newData3)).concat(newData4)).concat(newData5)

        let newData = newData6.filter((item, pos, self)=> {
            return self.indexOf(item) === pos;
        })




        this.setState({ user: newData });

    }

    get(e){
        
         const g = e.target.value;
       
        if (!g) {
            this.setState({ user: this.oldData });
        return false;
        }
        const newData  = this.oldData.filter(u => {
            let result = u.last_login_date.toLowerCase() === g.toLowerCase();
            return result;
        });
        this.setState({ user: newData });
        
    }
  render() {
    return (
      <div className="App">
        
       <Header/>
        <section>
        <Navbar name='▼' >  
        <ul>
        <li><Link to='/' className='active' > &nbsp; &nbsp;&nbsp; &nbsp; Portal Report </Link></li>
        <li><Link to='/'  className='active' > &nbsp; &nbsp;&nbsp; &nbsp;Redemption Report</Link></li>
        <li><Link to='/'  className='active' > &nbsp; &nbsp;&nbsp; &nbsp;BI</Link></li>
        </ul></Navbar>
        <article className="col-10 content">
            <div className="center">
            <div className="col-12">
                <div className='inline-block'>
                <h2 className="inline" >Registered Customers</h2>
                <select onChange={this.get}>
                <option value=''>All</option>
                <option value='monday'>Monday</option>
                <option value='tuesday' >Tuesday</option>
                <option value='wednesday'>Wednesday</option>
                <option value='thursday'>Thursday</option>
                <option value='friday'>Friday</option>
                <option value='saturday'>Saturday</option>
                <option value='sunday'>Sunday</option>
                </select>
                </div>
                
                    &nbsp; &nbsp;
                <div className='col-2 inline'>
                    <Datefilter options={['Today', 'Yesterday', 'Last 7 Days', 'Last 30 Days', 'This Month', 'Last Month', 'Custom Range']}/>
                </div>
                                

                <div className="search">
                <input  type="text" name="text" onKeyUp={this.search} onKeyDown={this.search} placeholder="Search Day"/>
                <span className="icon">🔍</span>
                </div>  
                


            </div>
            <br/>
            

                <div className="col-12" >
<br /><br/>
                    <div className="overflow">
                        <table>
                                   
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Phone </th>
                                <th>joined</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.user.length===0 && <tr><td colSpan='6' className="border-left border-right"><h1 className='h1s'>No Data Found</h1></td></tr>      }
                          
                        { this.state.user.map((o) =>{
                            
                                var result =  <Td key={o.id} user={o} />

                                return result
                        }) }
                         

                        </tbody>
                    </table>
                    </div>
                    
            <br/><br/>
                    <div className="clear_float">

                        <div align="left" className="col-4 float-left dis"><small>Displaying Users 1 - 10 of 20 in total</small></div>
                        <div align="center" className="col-4 float-left"> <a className="border-btn" href=""><span>◄</span></a><small>page 1 of 2</small> <a className="border-btn" href=""><span>►</span></a></div>
                        <div align="right" className="col-4 float-right dis"><small>Download: <a className="underline" href="">CSV, XML jSON</a> </small></div>
                        
                    </div>
                </div>
                
            </div>
            
            </article>
        </section>
       <Footer/>


       

      </div>
    );
  }
}


export default Table;
