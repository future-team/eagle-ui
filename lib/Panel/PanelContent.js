import React,{ PropTypes, Component } from 'react';
import classnames from 'classnames';
import ClassNameMixin from '../utils/ClassNameMixin.js';

/**
 * PanelContent组件
 * @class PanelContent
 * @constructor
 * @module ui
 * @extends Component
 * @requires React classnames
 * @since 0.1.0
 * @demo src/panel.js {js}
 * @demo panel.html {html}
 * @author bo.an@dianping.com
 * */
@ClassNameMixin
export default class PanelContent extends Component{

    static propTypes = {
    };

    static defaultProps = {
        classPrefix:'panel'
    };



    /**
     * @method render
     * @return {ReactElement}
     * */
    render(){
        return (
            <div className={
                classnames(
                    this.getClassName('content')
                )}>
                {this.props.children}
            </div>
        );

    }
}