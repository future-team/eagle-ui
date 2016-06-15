import React,{ PropTypes, Component } from 'react';
import classnames from 'classnames';
import ClassNameMixin from '../utils/ClassNameMixin.js';

/**
 * PanelContent定义内容区域
 * @class PanelContent
 * @constructor
 * @module panel(面板)
 * @extends Component
 * @demo star.js {UI展示}
 * @demo panel.js {源码}
 * @show true
 * */
@ClassNameMixin
export default class PanelContent extends Component{

    static propTypes = {
        /**
         * 是否加padding
         * @property padding
         * @type bool
         * @default true
         * */
        padding:PropTypes.bool
    };

    static defaultProps = {
        classPrefix:'panel',
        padding:true
    };
    render(){
        return (
            <div className={
                classnames(
                    this.getClassName('content')
                    ,this.props.padding?this.getClassName('padding'):'',
                    this.props.className
                )}>
                {this.props.children}
            </div>
        );

    }
}