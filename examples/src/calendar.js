/**
 * Created by mac on 15/11/4.
 */
import css from '../../lib/_include.less';
import React,{Component,PropTypes} from 'react';
import Calendar from '../../lib/Calendar.js';
import Input from '../../lib/Input.js';
import Row from '../../lib/Row.js';
import Col from '../../lib/Col.js';
import Grid from '../../lib/Grid.js';
import CalendarPanel from '../../lib/CalendarPanel.js';
import querystring from 'querystring';


let Demo= class Demo extends Component{
    constructor(props, context) {
        super(props, context);

        this.state = {
            show:false
        }
    };

    focus(){
        this.setState({
            show:true
        });
    }
    blur(){
        this.setState({
            show:false
        });
    }

    render(){

        return (
            <Grid>
            <Row>
                <Col sm={12}>
                    <CalendarPanel startDate="2015-11-11">
                        <Input placeholder="请选择日期" style={{width:'150px'}} />
                    </CalendarPanel>

                </Col>
                <Col sm={1} end>
                    每日邮报报道,英国华威大学划艇队推出了2016年新版裸体日历,小伙子们在镜头前“坦诚相见”,大秀肌肉。这是该校划艇队第六次拍摄这种日历。 长期锻炼的队员们骄傲的
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    <CalendarPanel startDate="2015-11-11" endDate="2015-12-1">
                        <Input placeholder="请选择日期" style={{width:'150px'}} />
                    </CalendarPanel>
                </Col>
            </Row>
            </Grid>
        );
    }
}

ReactDOM.render(
    <Demo />
    ,document.getElementById('root'));