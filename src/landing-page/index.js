import React, { Component } from 'react';
import {connect} from "react-redux";
import { checkToken} from "../redux/actions";
import Header from "../header";
import Body from "../body";
class LandingPage extends Component {

    componentDidMount() {
        this.props.checkToken();
    }

    render() {
        return(
            <div>
                <Header/>
                <Body/>
            </div>
        )
    }
}

const mapStateToProps = ({appCondition: {authorized}}) => {
    return ({
        authorized
    })
};
const mapDispatchToProps = { checkToken };

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)