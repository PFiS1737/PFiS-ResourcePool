> 本文件夹已迁移至[PFiS1737/live2d-widget](https://github.com/PFiS1737/live2d-widget)，并停止在此处更新

> 其实仍然在更新，预计于寒假中完成剩余迁移工作

# 信息
> 请遵循原作者的开源及转载协议。  
Copy from [stevenjoezhang/live2d-widget](https://github.com/stevenjoezhang/live2d-widget).  
Else API from [米米的博客](https://zhangshuqiao.org).  
基本用法：``https://cdn.jsdelivr.net/gh/PFiS1737/PFiS_Public_Repository@latest/live2d/file``  
# 引入
在``</body>``前添加：
```html
<script src="https://cdn.jsdelivr.net/gh/PFiS1737/PFiS_Public_Repository@latest/live2d/autoload.js"></script>
```
依赖Font Awesome：在``<head>``中添加
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css">
```
# 示例网站
[demo.html](http://pfis.infinityfreeapp.com/live2d_widget_demo.html)
# 开发笔记
打开文件以查看更多注释，本文更多的是给像我这样的萌新看的。  
引用[stevenjoezhang/live2d-widget](https://github.com/stevenjoezhang/live2d-widget)中的话：
> - ``waifu-tips.js``包含了按钮和对话框的逻辑；  
> - ``waifu-tips.json``中定义了触发条件（``selector``，CSS选择器）和触发时显示的文字（``text``）；  
> - ``waifu.css``是看板娘的样式表。  
> - 源文件是对Hexo的[NexT主题](http://github.com/next-theme/hexo-theme-next)有效的，为了适用于你自己的网页，可能需要自行修改，或增加新内容。  
> - 警告：作者不对包括但不限于``waifu-tips.js``和``waifu-tips.json``文件中的内容负责，请自行确保它们是合适的。  
## autoload.js
### 建议
1. 设置``live2d_path``参数的路径
    - 根据``autoload.js``文件中的注释和已有代码进行修改即可，建议使用``//``注释掉已有代码。
    - 路径链接后面必须加``/``。
2. 修改最低显示宽度
    - 根据``autoload.js``文件中的注释和已有代码修改``screen.width >= 768``中的``768``即可。
3. 更换API
    - 根据``autoload.js``文件中的注释和已有代码，释放已有``apiPath``或``cdnPath``，并注释掉多余的API即可，或添加自行搭建的API。
    - 引用[stevenjoezhang/live2d-widget](https://github.com/stevenjoezhang/live2d-widget)中的话：
    > - ``initWidget``方法接受名为``apiPath``和``cdnPath``的参数，两者设置其中一项即可。  
    > - 其中``apiPath``为后端API的URL，可以自行搭建，并增加模型（需要修改的内容比较多，此处不再赘述）。  
    > - 而``cdnPath``则是通过[jsDelivr](cdn.jsdelivr.net)这样的CDN服务加载资源，更加稳定。  
### 问题
1. 我如何搭建API？
    - 可参照[fghrsh/live2d_api](https://github.com/fghrsh/live2d_api)和[fghrsh的文章](https://www.fghrsh.net/post/170.html)。
        - 从[fghrsh/live2d_api](https://github.com/fghrsh/live2d_api)下载源码并放到网站目录  
        - 替换``autoload.js``里的API链接为``http[s]://网站域名/API所在目录/``  
2. autoload.js文件中已有的apiPath和cdnPath有什么区别？
    - ``https://live2d.fghrsh.net/api/``是[stevenjoezhang/live2d-widget](https://github.com/stevenjoezhang/live2d-widget)中附带的[fghrsh/live2d_api](https://github.com/fghrsh/live2d_api)的API。共有7个模型，有大量材质，速度较快。不足的是1和7模型在显示时与屏幕下边缘存在较大缝隙。可参考下文中``waifu.css``的建议3进行解决。
    - ``https://cdn.jsdelivr.net/gh/fghrsh/live2d_api/``是[stevenjoezhang/live2d-widget](https://github.com/stevenjoezhang/live2d-widget)中默认的API，使用[jsDelivr](cdn.jsdelivr.net)引用[fghrsh/live2d_api](https://github.com/fghrsh/live2d_api)中的文件而搭建成。因为文件总大小大于50M，[jsDelivr](cdn.jsdelivr.net)不能正常引用。
    - ``https://api.zsq.im/live2d/``来自[stevenjoezhang/live2d-widget](https://github.com/stevenjoezhang/live2d-widget)中提到的[米米的博客](https://zhangshuqiao.org)的[custom.js](https://zhangshuqiao.org/lib/custom.js)文件（别问我是这么找着的，问就是扒网站源代码）。在修复了上面第一个API中的问题的同时，又添加了数十个新模型。可速度却大大降低。
3. 为什么我的手机不能显示看板娘？
    - 参见上文中建议2。
## waifu-tips.js
### 建议
1. 修改对话内容
    - 所有汉字均能随意修改。
    - 不要试图在``showMessage()``中添加新的字段来随机输出，不过``messageArray = []``可以。
2. 修改工具栏中关于页转跳链接
    - 根据``waifu-tips.js``文件中的注释和已有代码，修改``open("YourURL");``即可。
3. 修改首次访问时加载的模型及材质
    - 根据``waifu-tips.js``文件中的注释和已有代码，修改``modelId = ;``和``modelTexturesId = ;``即可。
4. 修改材质变换方式
    - 根据``waifu-tips.js``文件中的注释和已有代码，修改``switch_textures``中的``switch``即可。
5. 删除不想要的工具栏按钮
    - 根据``waifu-tips.js``文件中的注释和已有代码修改即可。
    - 并可参考下文中``waifu.css``的建议6，修改按钮间间距。
    - 可参考以下例子进行修改：
    ```JavaScript
    //删除“纸飞机”按钮
    ... ...
    document.body.insertAdjacentHTML("beforeend", `<div id="waifu">
		<div id="waifu-tips"></div>
		<canvas id="live2d" width="800" height="800"></canvas>
		<div id="waifu-tool">
			<span class="fa fa-lg fa-comment"></span>
			<!--<span class="fa fa-lg fa-paper-plane"></span>-->
			<span class="fa fa-lg fa-user-circle"></span>
			<span class="fa fa-lg fa-street-view"></span>
			<span class="fa fa-lg fa-camera-retro"></span>
			<span class="fa fa-lg fa-info-circle"></span>
			<span class="fa fa-lg fa-times"></span>
		</div>
	</div>`);
    // 工具栏菜单列表，与实际顺序相同，由于最终会插入到网页中，需用<!--text-->注释
    ... ...
    document.querySelector("#waifu-tool .fa-comment").addEventListener("click", showHitokoto); // 一言API对话
	// document.querySelector("#waifu-tool .fa-paper-plane").addEventListener("click", () => { // 飞机大战（雾）
		// if (window.Asteroids) {
			// if (!window.ASTEROIDSPLAYERS) window.ASTEROIDSPLAYERS = [];
			// window.ASTEROIDSPLAYERS.push(new Asteroids());
		// } else {
			// const script = document.createElement("script");
			// script.src = "https://cdn.jsdelivr.net/gh/stevenjoezhang/asteroids/asteroids.js";
			// document.head.appendChild(script);
		// }
	// });
	document.querySelector("#waifu-tool .fa-user-circle").addEventListener("click", loadOtherModel); // 切换模型
    ```
## waifu.css
### 建议
1. 将看板娘放在网页右边
    - 懒人专用
        - 直接在``</body>``前添加（不要和本文开头的那个一起加）：
	```html
        <script src="https://cdn.jsdelivr.net/gh/PFiS1737/PFiS_Public_Repository@latest/live2d/special/autoload_right.js"></script>
        ```
    - 修改文件
        - 注释掉``#waifu {}``中的``left: 0;``，并释放``/* right: 0; */``；
        - 注释掉``#waifu-tool {}``中的``right: -10px;``，并释放``/* left: 10px; */``或``right: 10px;``；
        - 注释掉``#waifu-toggle {}``中的``left: 0;``，并释放``/* right: 0; */``；
        - 注释掉``#waifu-toggle {}``中的``margin-left: -100px;``，并释放``/* margin-right: -100px; */``；
        - 释放``#waifu-toggle {}``中的``/* transition: margin-right 1s !important; */``；
        - 释放``#waifu-toggle {}``中的``/* writing-mode: vertical-lr !important; */``；
        - 注释掉``#waifu-toggle.waifu-toggle-active {}``中的``margin-left: -50px;``，并释放``/* margin-right: -40px; */``；
        - 注释掉``#waifu-toggle.waifu-toggle-active:hover {}``中的``margin-left: -50px;``，并释放``/* margin-right: -20px; */``。
2. 修改工具栏颜色
    - 
3. 移动看板娘（上/下）
    - 
4. 移动看板娘（左/右）
    -
5. 无论如何不显示对话框
    - 
6. 修改工具栏按钮间距
### 问题
1. 我的看板娘已在网页中成功加载，但是我为什么看不见？
    - 根据``waifu.css``文件中的注释和已有代码，调大``#waifu {}``和``#waifu-toggle {}``中的``z-index``属性，目前已调整为``1000``。
2. 上文中建议1中第2步中的“释放``/* left: 10px; */``或``/* right: 10px; */``”有什么区别？
    - 释放``/* left: 10px; */``可以使工具栏在模型的左边。
    - 释放``/* right: 10px; */``可以使工具栏在模型的右边且不会超出屏幕边界。
## waifu-tips.json
- 根据自己网站的需要进行修改。
- 目前，此文件相对[stevenjoezhang/live2d-widget](https://github.com/stevenjoezhang/live2d-widget)中的源文件没有进行修改。
## 其他问题
1. 为什么我的看板娘不加载工具栏？
    - 请确保该网页已加载Font Awesome v4或v5。
2. 为什么我的看板娘不加载模型和材质？
    - 请确保您搭建的API正常运行，如果使用的是别人的，请联系API拥有者。
3. 我怎么才能清除[jsDelivr](cdn.jsdelivr.net)的缓存？
    - 在原先的url中，将``https://cdn.jsdelivr.net/...``替换为``https://purge.jsdelivr.net/...``即可。
    - 在测试中，最好调用min版本，可做到实时刷新。
# 更多内容请参见
- [stevenjoezhang/live2d-widget](https://github.com/stevenjoezhang/live2d-widget)及其[Issues](https://github.com/stevenjoezhang/live2d-widget/issues?q=is%3Aissue+is%3Aclosed)
- [fghrsh/live2d_api](https://github.com/fghrsh/live2d_api)
- [fghrsh/live2d_demo](https://github.com/fghrsh/live2d_demo)
- [fghrsh的文章 - 网页添加Live2D看板娘](https://www.fghrsh.net/post/123.html)
- [fghrsh的文章 - Live2D看板娘API迁移公告](https://www.fghrsh.net/post/170.html)
- [stevenjoezhang的文章 - 在网页中添加Live2D看板娘](https://zhangshuqiao.org/2018-07/在网页中添加Live2D看板娘/)
# 许可证
Released under the GNU General Public License v3  
http://www.gnu.org/licenses/gpl-3.0.html
