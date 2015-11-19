/**
 * Created by mac on 15/11/4.
 */
import css from '../../lib/_include.less';
import React,{Component} from 'react';
import Tab from '../../lib/Tab.js';
import Tabset from '../../lib/Tabset.js';

let Demo = class Demo extends Component{

    constructor(props,context){
        super(props,context);

        this.state={
            tabIndex:0
        };
    }

    callback(index){
        if(this.state.tabIndex!==index){
            this.setState({
                tabIndex:index
            });
        }
    }

    tab3(){
        if(this.state.tabIndex==2){
            return (<div>tab3</div>);
        }
    }
    tab2(){
        if(this.state.tabIndex==1){
            return (<div>tab2</div>);
        }
    }
    tab1(){
        if(this.state.tabIndex==0){
            return (<div>tab1</div>);
        }
    }


    render(){
        return (
            <Tabset activeTab={this.state.tabIndex} tabCallback={::this.callback}>
                <Tab heading='tab1'>
                    {::this.tab1()}
                </Tab>
                <Tab heading='tab2'>
                    {::this.tab2()}
                </Tab>
                <Tab heading='tab3'>
                    {::this.tab3()}
                </Tab>
            </Tabset>
        );
    }
}

ReactDOM.render(
    <Demo />
    ,document.getElementById('root'));