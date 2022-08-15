import React, { Component } from 'react';
import LoginNavBar from '../LoginNavBar';
import EmployeeServicess from './../../services/EmployeeServicess';
import { Chart } from 'react-charts';
import { PieChart } from 'react-minimal-pie-chart';

class Dashboard extends Component {

    constructor(props){
        super(props)
        this.state = {
            currVal : 0,
            investVal : 0
        }
        
    }
    
    componentDidMount(){
        EmployeeServicess.getTransiction().then((res) =>{
            let gridResult = res.data;
            let currVal = 0;
            let investVal = 0; 
            gridResult.forEach((element, index, array) =>{
                element.investmentVal = element.price * element.quantity;
                element.currentVal = element.ltp * element.quantity;
                currVal += element.currentVal;
                investVal += element.investmentVal;

            });
            this.setState({currVal: currVal});
            this.setState({investVal:investVal});
        });
    }

    render() {

        /* const data = [
            {
              label: 'Series 1',
              data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
            },
            {
              label: 'Series 2',
              data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
            }
          ];
         
          const axes =  [
            { primary: true, type: 'linear', position: 'bottom' },
            { type: 'linear', position: 'left' }
          ] */

          const data=[
              { title: 'One', value: 10, color: '#E38627' },
              { title: 'Two', value: 15, color: '#C13C37' },
              { title: 'Three', value: 20, color: '#6A2135' },
            ]
          /*   const [selected, setSelected] = useState<number | undefined>(0);
            const [hovered, setHovered] = useState<number | undefined>(undefined); */
        return (
            <div>
                 <LoginNavBar />
                 <nav class="navbar navbar-expand-lg navbar-light bg-light loginTopNav">
                    <div id="navbarCollapse" class="collapse navbar-collapse  loginTopNavContentPadding">		
                        
                        <div class="navbar-nav ml-auto ">
                            <p class="currentValueDisplay">Current value : {this.state.currVal}</p>
                            <p class="currentValueDisplay"></p>
                        </div>
                        <div class="navbar-nav ml-auto ">
                            <p class="currentValueDisplay">Investment Value : {this.state.investVal}</p>
                        </div>
                        
                    </div>
                 </nav>
                 <PieChart className ="pieChartData"
                 data={data}
                 radius={PieChart.defaultProps.radius - 6}
                 segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
                 onClick={(event, index) => {
                     debugger;
                    //action('CLICK')(event, index);
                    console.log('CLICK', { event, index });
                    //etSelected(index === selected ? undefined : index);
                  }}
                 //segmentsShift={(index) => (index === selected ? 6 : 1)}
                />
                 {/* <Chart data={data} axes={axes} /> */}
                 
            </div>
        );
    }
}

export default Dashboard;