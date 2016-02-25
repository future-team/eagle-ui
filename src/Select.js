/**
 * Created by panqianjin on 15/11/12.
 */
import React, {PropTypes} from 'react';
import ReactDom from 'react/lib/ReactDOM';
import classnames from 'classnames';
import Input from './Input.js';
import Row from './Row.js';
import Col from './Col.js';
import Grid from './Grid.js';

import Search from './sug/Search';

/**
 * 下拉选择框组件<br>支持在input框中输入文字或者点击下拉菜单中的选项进行查询
 * @class Select
 * @module form(表单)
 * @constructor
 * @extends Component
 * @demo docDemo/module/select.html {UI展示}
 * @demo docDemo/select.js {源码}
 * @show true
 * */
export default class Select extends Search {
    static defaultProps = {
        /**
         * 回调方法，主要作用将value传给父级元素。默认为null
         * @event  getValueCallback
         * @param {primitive/pointer} value 值
         * @param {string} key 键
         * @param {string} type 类型
         * @default null
         * */
        getValueCallback: null,
        /**
         * 样式类名前缀
         * @property classPrefix
         * @type string
         *
         * */
        classPrefix: 'select',
        componentTag: 'div',
        defaultValue:'',
        icon:'arrow_drop_down',
        iconStyle:{
            width:'30px',
            height:'30px',
            top: '15px',
            right: '0'
        }
    };

    constructor(props, context,defaultState={}) {
        super(props, context);
        this.inputId = this.uniqueId();
        super.setDefaultState(defaultState);
    }
    entryCallback(){
        if(this.state._activeValue =='' && this.state.value ==''){
            this.setDefaultData();
            this.show();
        }

    }
}