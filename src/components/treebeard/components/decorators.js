import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { VelocityComponent } from 'velocity-react';




const Loading = ({style}) => {
    return <div style={style}>loading...</div>;
};
Loading.propTypes = {
    style: PropTypes.object
};

const Toggle = ({style}) => {
    const {height, width} = style;
    const midHeight = height * 0.5;
    const points = `0,0 0,${height} ${width},${midHeight}`;
/*<svg height={height} width={width}>
                    <polygon points={points} style={style.arrow}/>
                </svg>*/
    return (
        <div style={style.base}>
            <div style={style.wrapper}>
            <i className="fa fa-angle-right" style={style.arrow}></i>
           </div>
        </div>
    );
};
Toggle.propTypes = {
    style: PropTypes.object
};

const Header = ({style, decorators, terminal, onClick, node}) => {
    return (
        
        <div style={style.base}   >
        <input type="checkbox" onClick={onClick} value={node} /><label style={style.showdata}>{node.name}</label>
        </div>
    );
};
Header.propTypes = {
    style: PropTypes.object,
    node: PropTypes.object.isRequired
};

class Container extends Component {
    render() {
        const {style, decorators, terminal, onClick, node} = this.props;

        return (
            <div  
                 ref={ref => this.clickableRef = ref}
                 style={style.container}>
                {!terminal ? this.renderToggle() : null}

                <decorators.Header node={node}
                                   style={style.header}/>
                   </div>
        );
    }

    renderToggle() {
        const {animations} = this.props;

        if (!animations) {
            return this.renderToggleDecorator();
        }

        return (
            <VelocityComponent animation={animations.toggle.animation}
                               duration={animations.toggle.duration}
                               ref={ref => this.velocityRef = ref}>
                {this.renderToggleDecorator()}
            </VelocityComponent>
        );
    }

    renderToggleDecorator() {
        const {style, decorators} = this.props;

        return <decorators.Toggle style={style.toggle}/>;
    }
}

Container = Radium(Container);

Container.propTypes = {
    style: PropTypes.object.isRequired,
    decorators: PropTypes.object.isRequired,
    terminal: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    animations: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.bool
    ]).isRequired,
    node: PropTypes.object.isRequired
};

export default {
    Loading,
    Toggle,
    Header,
    Container
};
