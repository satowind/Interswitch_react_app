
import React,{Component} from 'react';
import './dashboard.css';
import Footer from '../components/footer';
import Header from '../components/header';
import Navbar from '../components/nav';
import Svg from '../components/svg';



class Dashboard extends Component {
  render() {
    return (
      <div className="App">
        <Header title="homepage" >
        <div> <h2>inner</h2> </div>
        </Header>
        <section>
          <Navbar name='►'/>
          <article className="col-10 content">
          <div className="center pad">
              <div className="col-12">

                <h2 className="inline">Dashboard</h2>
                  <select>
                <option>Today: 20 Apr</option>
                <option >Yesterday</option>
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
                <option>This Month</option>
                <option >Last Month</option>
                <option>Custom Date</option>
              </select>
              
              <div className="search">
                  <input  type="text" name="text" placeholder="Search"/>
                  <span className="icon">🔍</span>
              </div>  
              

              </div>
              <br/><br/>
              <div className="clear_float">
                <div className="col-6 float-left">
                        <div className="clear_float">
                          <Svg style='style' title='1,234' para='Registered Customers' color='#c00c00'/>
                          <Svg style='style2' title='3,456' para='Value of Redemptions' color='#00c3a2'/>
                          <Svg style='style3' title='6,789' para='Points Redeemed' color='#00c9e0'/>
                          <Svg style='style4' title='3,450' para='Cash Spend (Debit Card)' color='#6a76ce'/>
                         

                        </div>
                    </div>

                    <div className="col-6 float-left">
                      <div className="clear_float style5">

                          <div className="col-12  border">
                            <h5 className="p5">Summary</h5>

                            <small className="p6">Month</small> 
                            <a className="p8 sato to_red xtra_small" href="">All Time</a>
                          </div>
                          <div className="col-12  border heights">
                            
                            <h4 className='p1 col-6'><small className="weight">lorem ipsum</small><br/> 123456789</h4>

                            <h4 className='p2 col-6'><small className="weight">lorem ipsum</small><br/> 123456789</h4>

                            <h4 className='p3 col-6'><small className="weight">lorem ipsum</small><br/> 123456789</h4>

                            <h4 className='p4 col-6'><small className="weight">lorem ipsum</small><br/> 123456789</h4>

                            

                            <br/><br/>
                                <svg viewBox="5 15 400 100" className="chart">
                                  <polyline
                                    fill="red"
                                    stroke="none"
                                    strokeWidth="5"
                                    points="
                                      00,120
                                      20,60
                                      40,80
                                      60,20
                                      80,80
                                      100,80
                                      120,60
                                      140,100
                                      160,90
                                      180,80
                                      200, 110
                                      220, 10
                                      240, 70
                                      260, 100
                                      280, 100
                                      300, 40
                                      320, 0
                                      340, 100
                                      360, 100
                                      380, 120
                                      400, 60
                                      420, 70
                                      440, 80
                                    "
                                  />
                                  
                                </svg>

                                <div className="block">
                                  
                                </div>

                          </div>
                          
                      </div>
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

export default Dashboard;


      
         










