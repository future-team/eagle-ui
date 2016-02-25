/**
 * Created by mac on 15/9/7.
 */
import React,{ PropTypes } from 'react';
import classnames from 'classnames';

import Input from './Input.js';

import Component from './utils/Component';

/**
 * RadioGroup需与Input组件配合使用<br/>
 * 它的作用是将type=radio的Input组件在UI上展示在一起
 * @class RadioGroup
 * @module form(表单)
 * @extends Component
 * @constructor
 * @demo docDemo/module/input.html {UI展示}
 * @demo docDemo/RadioGroup.js {源码}
 * @show true
 * */
export default class RadioGroup extends Component{

    static propTypes = {
        /**
         * radio name
         * @property name
         * @type String
         * */
        name:PropTypes.string,
        /**
         * 默认选中项
         * @property defaultChecked
         * @type String
         * */
        defaultChecked:PropTypes.string,
        /**
         * 获取选中的值
         * @property getValueCallback
         * @type String
         * */
        getValueCallback:PropTypes.func
    };

    constructor(props, context) {
        super(props, context);

        this.state={
            checked:this.props.defaultChecked
        };
    }

    _onChange(target){

        if(this.state.checked!=target.value ){

            this.setState({
                checked:target.value
            });
            this.execMethod('getValue',target.value,target);
        }
    }

    componentDidMount(){

    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            checked: nextProps.defaultChecked
        });
    }

    render(){

        let options = React.Children.map(this.props.children,(option)=>{
            let {
                name,
                value,
                label,
                ...other,
                } = option.props;

            return <Input
                {...other}
                ref={option.props.value}
                name={this.props.name}
                key={option.props.value}
                value={option.props.value}
                label={option.props.label}
                activeCallback={::this._onChange}
                checked={option.props.value === this.state.checked}/>;

        },this);

        return (
            <div style={this.props.style}
                 className={classnames(this.getClassName('input-group'),this.props.className || '')}>
                <div className={this.getClassName('input-group-container')}>
                {options}
                </div>
            </div>
        );
    }
}