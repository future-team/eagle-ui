import React, {PropTypes} from 'react';
import classNames from 'classnames';
import Component from './utils/Component';
/**
 * 星级评价(Star)组件<br />
 * 提供的UI展示属性接口包括<br/>
 * <ul>
 *     <li>rate：星级评价的分数(满分为100)<code>默认为0</code></li>
 *     <li>size：星星的大小(默认单位为px)<code>默认13*13px</code></li>
 *     <li>disable：是否可以手动设置星星比率<code>默认为true[不可以]</code></li>
 * </ul><br>
 * 使用方式:
 * <pre><code>&#60;Star rate={50} size={10}/&#62;</code>
 * </pre>
 * @class Star
 * @module ui
 * @extends Component
 * @constructor
 * @demo #/star|star.js
 * @show true
 * */
export default class Star extends Component{
    static propTypes = {
        /**
         * 星级评价分数(满分100)
         * @property Rate
         * @type number
         * @default 0
         * */
        rate:PropTypes.number,
        /**
         * 星星大小
         * @property size
         * @type String||number
         * @default 13  可以取值10-20 默认单位为'px'
         * */
        size: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
        ]),
        /**
         * 星星是否可以自己设置
         * 设置单位为1个星星
         * @property disable
         * @type boolean
         * @default false
         *
         */
        disable:PropTypes.bool,
        /**
         * 用于不同的css写法导致的位置微调
         */
        adjust:PropTypes.number,
        classPrefix:PropTypes.string
    };
    static defaultProps = {
        classPrefix:'star',
        rate:0,
        disable:true,
        adjust:0
    };

    componentDidMount(){
        this.resizeListener()
        window.addEventListener('resize',this.resizeListener)
    }
    componentWillUnmount(){
        window.removeEventListener('resize',this.resizeListener)
    }

    componentWillReceiveProps(nextProps) {
        let newRate=nextProps.rate;
        if(this.state.rate!==newRate){
            this.setState({
                rate:newRate
            });
            this.Rate = newRate;
        }
    }
    constructor(props,context){
        super(props,context);
        this.state={
            rate:props.rate,
            size:props.size,
            adjust:props.adjust
        };
        this.Rate = props.rate;
        let self=this;
        this.resizeListener=function(){
            function calculateCoor(){
                let node=self.refs.starContainer;
                self.offsetWidth = node.offsetWidth;
                self.positionX = 0;
                while (node) {
                    self.positionX += node.offsetLeft;
                    node = node.offsetParent;
                }
                self.positionX += self.state.adjust;
            }
            if(!self.positionX) {
                calculateCoor();
            }
        }
    }
    renderCustomize(e) {
        let newPositionX = e.clientX;

        let newRate = Math.floor((newPositionX - this.positionX) / this.offsetWidth*5+1) * 20;
        this.setState({
            rate:newRate
        });
        this.props.activeCallback &&(this.props.activeCallback(newRate) );
        this.Rate = newRate;
    }

    render(){
        let {rate,size} = this.state;
        //兼容用户输入px为单位的数据大小
        size=/px/i.test(size)?size.replace('px',''):size;
        let customizeStyle=size?{
            width:size*5+'px',
            height:size-1+'px',
            backgroundSize:size*5+'px auto',
            cursor:!this.props.disable?'pointer':'hand'
        }:{};
        let shadowPosition=size?{
            backgroundPosition:"0  -"+size+"px"
        }:{};
        return (
            <div className={this.getProperty()}
                 style={customizeStyle}
                 onMouseMove={(e)=>{
                    !this.props.disable&&this.renderCustomize(e)
                    }}
                 ref='starContainer'>
                <div className={this.getClassName('grey')} style={{width:rate+'%',...shadowPosition}}></div>
            </div>
        )
    }
}