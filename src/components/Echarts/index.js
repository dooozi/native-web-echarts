import React, {Component} from 'react';
import {WebView, View, StyleSheet} from 'react-native';
import renderChart from './renderChart';
import echarts from './echarts.min';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cw: 0
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.option !== this.props.option) {
            this.refs.chart.reload();
        }
    }
    layout = (e) => {
        this.setState({cw: e.layout.width})
    }
    render() {
        return (
            <View style={{
                flex: 1,
                height: this.props.height || 400
            }} onLayout={({nativeEvent: e}) => this.layout(e)}>
                <WebView ref="chart" scrollEnabled={false} injectedJavaScript={renderChart(this.props, this.state.cw)} style={{
                    height: this.props.height || 400
                }} source={this.props.tpl
                    ? {
                        uri: this.props.tpl
                    }
                    : require('./tpl.html')}/>
            </View>
        );
    }
}
