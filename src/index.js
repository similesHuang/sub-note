import './public-path';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/dark.less';
import App from './App';
import { BrowserRouter} from 'react-router-dom';

let root;

function render(props) {
  const { container } = props
  const dom = container ? container.querySelector('#root') : document.getElementById('root')
  root = ReactDOM.createRoot(dom)
  root.render(
    <BrowserRouter basename='/sub-note'>
       <App/>
    </BrowserRouter>
  )
}

// 判断是否在qiankun环境下，非qiankun环境下独立运行
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

// 各个生命周期
// bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
export async function bootstrap() {

}

// 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
export async function mount(props) {
  
  props.onGlobalStateChange((state, prev) => {
 
     console.log('@@',state)
  });

  render(props);
}

// 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
export async function unmount(props) {
  root.unmount();
}

