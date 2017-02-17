/**
 * Created by mac on 15/11/4.
 */

import React, { Component ,PropTypes} from 'react';
import TreeMenu from "eg-tree-menu";//联想功能组件
import {Button} from "eagle-ui";
import {DemoLayout, DemoItem, DemoShow, CodeShow} from '../libs/Layout';
import Code, {getFile} from '../libs/Code'

export default class Demo extends Component{
    constructor(props,context){
        super(props,context);
        this.state={
            selected:'',
            expandNodes:{3: true, 4: true, 5: true, 6: true, 7: true, 8: true, 9: true, 10: true, 11: true, 16: true,10014:true},
            data:[{
                "typeId": 2,
                "parentTypeId": 0,
                "typeName": "测试",
                "leadingAnswer": "",
                "level": 1,
                "firstOwnerId": 0,
                "secondOwnerId": 0,
                "children": [
                    {
                        "typeId": 1000023,
                        "parentTypeId": 10005,
                        "typeName": "线上测试",
                        "leadingAnswer": "这是线上测试分类,你玩我吧!",
                        "level": 3,
                        "firstOwnerId": 22315,
                        "secondOwnerId": 17896,
                        "children": [],
                        "leaf": true
                    }
                ],
                "leaf": false
            },
                {
                    "typeId": 3,
                    "parentTypeId": 0,
                    "typeName": "POI相关",
                    "leadingAnswer": "",
                    "level": 1,
                    "firstOwnerId": 0,
                    "secondOwnerId": 0,
                    "children": [
                        {
                            "typeId": 10014,
                            "parentTypeId": 3,
                            "typeName": "评价评分",
                            "leadingAnswer": "",
                            "level": 2,
                            "firstOwnerId": 0,
                            "secondOwnerId": 0,
                            "children": [
                                {
                                    "typeId": 1000034,
                                    "parentTypeId": 10014,
                                    "typeName": "美团侧评价",
                                    "leadingAnswer": "",
                                    "level": 3,
                                    "firstOwnerId": 37743,
                                    "secondOwnerId": 0,
                                    "children": [],
                                    "leaf": true
                                },
                            ],
                            "leaf": false
                        },
                        {
                            "typeId": 1000026,
                            "parentTypeId": 10006,
                            "typeName": "门店基本信息/地图报错",
                            "leadingAnswer": "\n【到综/到餐推广销售】请在阿波罗商机（门店）标签→【POI报错】入口提交报错：<br/>\n  <a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"https://a.dper.com/shops#!/shop/all\" target=\"_blank\">https://a.dper.com/shops#!/shop/all</a><br/>\n【到餐销售】请在美团点评数据门户报错，报错入口：<br/>\n  <a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://mdc.sankuai.com/web/report/poierror\" target=\"_blank\">http://mdc.sankuai.com/web/report/poierror</a><br/>\n  以上报错90%系统都能够自动处理，比其他渠道等着人工处理要快的多。<br/>\n 【点评&美团映射关系报错】，所有销售都请在MDC门户→美大关联报错提交：<br/>\n  <a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://mdc.sankuai.com/web/report/relatingreport\" target=\"_blank\">http://mdc.sankuai.com/web/report/relatingreport</a><br/>\n  以上报错都会在1个工作日内17:00前处理完毕\n不管在门户或阿波罗报错，商户名、地址、电话、营业状态、地图字段通过审核后，会自动同步修改另一侧信息（除行政区、商区、靠近字段，这三个字段需要在<br/><a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://mdc.sankuai.com/\" target=\"_blank\">http://mdc.sankuai.com/</a>，门店报错-丰富度信息，点击管理点评连锁，跳转点评阿波罗报错审核）",
                            "level": 3,
                            "firstOwnerId": 37425,
                            "secondOwnerId": 0,
                            "children": [],
                            "leaf": true
                        }
                    ],
                    "leaf": false
                }
            ]
        };
    }
    render(){
        let self=this;
        return(
            <DemoLayout title="树状菜单">
                <DemoItem title="获取展开节点的信息">
                    <CodeShow>
                        <Code code={getFile('treeMenu-demo')}/>
                    </CodeShow>
                    <DemoShow>
                        <Button onClick={function(){
                            console.log(self.refs.tm.getExpandNodes())
                        }}>获取展开节点的信息</Button>
                        <br/>
                        <TreeMenu ref='tm' clickCallback={function(nodeId,type){
                            console.log(nodeId,type);
                            self.setState({
                                selected: nodeId
                            })
                        }} selected={self.state.selected} data={this.state.data} expandNodes={this.state.expandNodes}/>
                    </DemoShow>
                </DemoItem>
            </DemoLayout>
        )
    }
};