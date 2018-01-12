import echarts from './echarts.min';
import toString from '../../util/toString';

export default function renderChart(props, width) {
    const height = props.height || 400;
    return `
    document.getElementById('main').style.height = "${height}px";
    document.getElementById('main').style.width = "${width}px";
    var myChart = echarts.init(document.getElementById('main'));
    myChart.setOption(${toString(props.option)});
  `
}
