import { AppRegistry } from 'react-native';
import App from '../src/web/App.web'
// 注册组件
AppRegistry.registerComponent('App', () => App);

// 启动App组件
AppRegistry.runApplication('App', {
  // 启动时传给App组件的属性
  initialProps: {},
  // 渲染App的DOM容器
  rootTag: document.getElementById('root')
});
