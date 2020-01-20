import React from 'react';
import { connect } from 'react-redux';

class Demos extends React.Component {

    constructor(props) {
        super(props);
    }

   

    render() {
        return (
            <div>
                <div>Demos 路由测试!!!!!</div>
                
            </div>
        );
    }
}
export default connect(
    state => ({
        number: state.number
    })
)(Demos);