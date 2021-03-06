import React,{ PropTypes, Component } from 'react';
import classnames from 'classnames';
import ClassNameMixin from '../utils/ClassNameMixin.js';

/**
 * 表格行组件
 * @class Tr
 * @constructor
 * @module table(表格)
 * @extends Component
 * @demo #/table|table.js
 * @show true
 * */
@ClassNameMixin
export default class Tr extends Component{

    static propTypes = {
        /**
         * 是否在每一行下添加分割线
         * @property split
         * @type bool
         * @default false
         * */
        split:PropTypes.bool
    };

    static defaultProps = {
        classPrefix:'tr'
    };
    render(){
        return (
            <tr {...this.props} className={
                classnames(
                    this.props.split ? this.getClassName('split') : null,
                    this.props.className
                )
                }>
                {this.props.children}
            </tr>
        );

    }
}