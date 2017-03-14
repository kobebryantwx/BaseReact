/**
 * Created by Administrator on 2017/3/8 0008.
 */
<!--
    描述：使用JSX的地方，要设置成text/babel,转换成浏览器可运行的代码
-->
/**
 * ReactDOM.render() 用于将模版转换成HTML语言，渲染DOM，并插入指定的DOM节点
 *  参数：
 *  1.模版渲染内容（HTML形式）
 *  2.这段模版需要插入的DOM节点
 *  3.渲染后的回调
 */

ReactDOM.render(
    <h1 >Hello</h1>,
    document.getElementById("container")
);
