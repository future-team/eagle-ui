/**
 * Created by mac on 15/11/4.
 */
import React,{Component} from 'react';
import Input from '../../../src/Input.js';
import Button from '../../../src/Button.js';
import Row from '../../../src/Row.js';
import Panel from '../../../src/panel/Panel.js';
import PanelContent from '../../../src/panel/PanelContent.js';
import Col from '../../../src/Col.js';
import Grid from '../../../src/Grid.js';
import RadioGroup from '../../../src/RadioGroup.js';
import ValidatorPanel from '../../../src/ValidatorPanel.js';
import CalendarPanel from '../../../src/CalendarPanel.js';
import Tab from '../../../src/Tab.js';
import Tabset from '../../../src/Tabset.js';
import Dialog from '../../../src/Dialog.js';

let Demo = class Demo extends Component{

    constructor(props,context){
        super(props,context);


        this.rules = {
            //key对应的是表单元素的name
            calendar:{
                //组件默认规则
                required:true
            },
            userName:{
                required:true
            },
            checkbox:{
                required:true,
                //自定义规则
                isValueToNumber:{
                    text:'value值不是字符串',
                    rule:function(value){
                        console.dir(value);
                        return isNaN(value);
                    }
                }
            },
            date:{
                date:true
            },
            number:{
                number:true,
                digits:true
            },
            equalTo:{
                digits:true,
                equalTo:{
                    params:'[name="number"]'
                }

            },
            minlength:{
                minlength:{
                    params:10
                },
                maxlength:{
                    params:15
                }
            },
            email:{
                email:true
            }
        };

        this.state={
            showTab:0,
            update:'uid',
            show:false
        };

    }

    show(value,text,target,active){
        console.dir(value);
    }

    getDialog(d){
        this.dialog = d;
    }

    change(value){
       this.setState({
           showTab:value,
           update:'uid'+(+new Date())
       });

    }

    submit(vals){
        alert('验证成功'+JSON.stringify(vals));
    }

    showMask(){
        this.dialog.open();
    }

    checktab(){
        if(this.state.showTab =='1'){
            return (
                <div>
                <Row>
                    <Col>
                        <Input placeholder="请输入姓名"  name="userName" data-validate />
                    </Col>
                </Row>
                <Row>
                <Col>
                    <Input  type="checkbox"  name="checkbox" value="1"  data-validate />
                    <Input  type="checkbox"   name="checkbox" value="2" data-validate  />
                    <Input  type="checkbox"   name="checkbox" value="3" data-validate  />
                    <Input  type="checkbox"   name="checkbox" value="4" data-validate  />
                </Col>

                </Row>
                </div>
            );
        }else{
            return null;
        }
    }

    render(){
        return (
            <Panel>

                    <Grid>
                        <Tabset>
                            <Tab heading="demo1">
                                <Row>
                                    <Col>
                                        <PanelContent>
                                            <RadioGroup defaultChecked={this.state.showTab+''} name="radio-foot" getValueCallback={::this.change}>
                                                <Input  type="radio"  label="显示第一个表单元素" value="0"  />
                                                <Input  type="radio"  label="显示第二个表单元素" value="1"   />
                                            </RadioGroup>
                                        </PanelContent>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={5} end>
                                        <ValidatorPanel rules={this.rules} submitElement="#submit" direction="right" id="testFrom" update={this.state.update} submitCallback={::this.submit}>
                                            <Row>
                                                <Col>
                                                    <PanelContent>
                                                        <Row>
                                                            <Col>
                                                                <CalendarPanel>
                                                                    <Input placeholder="请选择日期" icon="calendar" name="date" style={{width:'150px'}} data-validate />
                                                                </CalendarPanel>

                                                            </Col>
                                                        </Row>
                                                        {this.checktab()}
                                                        <Row>
                                                            <Col>
                                                                <Input placeholder="请输入有效的号码" name="number" data-validate />
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col>
                                                                <Input placeholder="请输入有效的号码" name="equalTo" data-validate />
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col>
                                                                <Input placeholder="最大最小字符10-15" name="minlength" data-validate />
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col>
                                                                <Input placeholder="请输入您的email" name="email" data-validate />
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col>
                                                                <Button radius egSize="xs" id="submit" >点我提交表单</Button>
                                                            </Col>
                                                        </Row>
                                                    </PanelContent>
                                                </Col>
                                            </Row>

                                        </ValidatorPanel>
                                    </Col>
                                </Row>
                            </Tab>
                            <Tab heading="demo2">
                                <PanelContent>
                                    <Row>
                                        <Col>
                                            <Button onClick={::this.showMask}>弹出验证表单</Button>
                                        </Col>
                                    </Row>
                                </PanelContent>
                            </Tab>
                        </Tabset>
                    </Grid>
                    <Dialog type={'dialog'} ref={::this.getDialog}>
                        <Grid style={{width:'300px'}}>
                            <ValidatorPanel rules={this.rules} submitElement="#ssubmit" direction="top" id="testDialogFrom" submitCallback={::this.submit}>
                                <Row>
                                    <Col>
                                        <Input placeholder="请输入姓名"  name="userName" data-validate />

                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Input placeholder="请输入有效的号码" name="number" data-validate />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Input placeholder="请输入有效的号码" name="equalTo" data-validate />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Input placeholder="最大最小字符10-15" name="minlength" data-validate />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Input placeholder="请输入您的email" name="email" data-validate />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Button radius egSize="xs" id="ssubmit" >点我提交表单</Button>
                                    </Col>
                                </Row>
                            </ValidatorPanel>
                        </Grid>
                    </Dialog>
            </Panel>

        );
    }
};
export default Demo;