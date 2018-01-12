import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import renderChart from './renderChart';
import Echarts from './echarts.min';

export default class App extends Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.option !== this.props.option) {
            var myChart = echarts.init(document.getElementById(this.props.renderid));
            myChart.setOption(nextProps.option);
        }
    }
    componentWillMount() {
        var myScript = document.createElement("script");
        myScript.type = "text/javascript";
        myScript.appendChild(document.createTextNode(Echarts));
        document.body.appendChild(myScript);
    }
    componentDidMount() {
        document.getElementById(this.props.renderid).style.height = this.props.height + 'px';
        var myChart = echarts.init(document.getElementById(this.props.renderid));
        myChart.setOption(this.props.option);

    }
    render() {
        return (
            <View id={this.props.renderid} style={{
                flex: 1,
                height: this.props.height || 400
            }}></View>
        );
    }
}
