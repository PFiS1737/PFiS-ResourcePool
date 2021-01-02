# 信息
Copy from [stevenjoezhang/live2d-widget](https://github.com/stevenjoezhang/live2d-widget), [米米的博客](https://zhangshuqiao.org).  
Else API from [米米的博客](https://zhangshuqiao.org).  
基本用法：``https://cdn.jsdelivr.net/gh/PFiS1737/PFiS_Public_Repository@latest/live2d/file``  
在网站中添加：
```html
<script src="https://cdn.jsdelivr.net/gh/PFiS1737/PFiS_Public_Repository@latest/live2d/autoload.js"></script>
```
依赖Font Awesome：在``<head>``中添加
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css">
```
示例网站：[demo.html](http://pfis.infinityfreeapp.com/live2d_widget_demo.html)
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
    - 根据``autoload.js``文件中的注释和已有代码进行修改即可（文件中约1-5行处），建议使用``//``注释掉已有代码。
    - 路径链接后面必须加``/``。
2. 修改最低显示宽度
    - 根据``autoload.js``文件中的注释和已有代码修改``screen.width >= 768``中的``768``即可（文件中约30行处）。
3. 更换API
    - 根据``autoload.js``文件中的注释和已有代码，释放已有``apiPath``或``cdnPath``，并注释掉多余的API即可（文件中约38-40行处），或添加自行搭建的API。
    - 引用[stevenjoezhang/live2d-widget](https://github.com/stevenjoezhang/live2d-widget)中的话：
    > - ``initWidget``方法接受名为``apiPath``和``cdnPath``的参数，两者设置其中一项即可。  
    > - 其中``apiPath``为后端API的URL，可以自行搭建，并增加模型（需要修改的内容比较多，此处不再赘述）。  
    > - 而``cdnPath``则是通过[jsDelivr](cdn.jsdelivr.net)这样的CDN服务加载资源，更加稳定。  
### 问题
1. 我如何搭建API？
    - 可参照[fghrsh/live2d_api](https://github.com/fghrsh/live2d_api)和[fghrsh的文章](https://www.fghrsh.net/post/170.html)。
    > - 从[fghrsh/live2d_api](https://github.com/fghrsh/live2d_api)下载源码并放到网站目录  
    > - 替换``autoload.js``里的API链接为``http[s]://网站域名/API所在目录/``  
2. autoload.js文件中已有的apiPath和cdnPath有什么区别？
    - ``https://live2d.fghrsh.net/api/``是[stevenjoezhang/live2d-widget](https://github.com/stevenjoezhang/live2d-widget)中附带的[fghrsh/live2d_api](https://github.com/fghrsh/live2d_api)的API。共有7个模型，有大量材质，速度较快。不足的是1和7模型在显示时与屏幕下边缘存在较大缝隙。
    - ``https://cdn.jsdelivr.net/gh/fghrsh/live2d_api/``是[stevenjoezhang/live2d-widget](https://github.com/stevenjoezhang/live2d-widget)中默认的API，使用[jsDelivr](cdn.jsdelivr.net)引用[fghrsh/live2d_api](https://github.com/fghrsh/live2d_api)中的文件而搭建成的API，受[jsDelivr](cdn.jsdelivr.net)缓存影响较大。
    - ``https://api.zsq.im/live2d/``来自[stevenjoezhang/live2d-widget](https://github.com/stevenjoezhang/live2d-widget)中提到的[米米的博客](https://zhangshuqiao.org)的[custom.js](https://zhangshuqiao.org/lib/custom.js)文件（别问我是这么找着的，问就是扒网站源代码）。在修复了上面第一个API中的问题的同时，又添加了数十个新模型。可速度却大大降低。
3. 为什么我的手机不能显示看板娘？
    - 参见上文中建议2。
## waifu-tips.js
### 建议
1. 修改对话内容
    - 所有汉字均能随意修改。
    - 不要试图在``showMessage()``中添加新的字段来随机输出，不过``messageArray = []``可以。
2. 修改工具栏中关于页转跳链接
    - 根据``waifu-tips.js``文件中的注释和已有代码进行修改即可（文件中约81-82行处）。
3. 修改首次访问时加载的模型及材质
    - 根据``waifu-tips.js``文件中的注释和已有代码进行修改即可（文件中约166-169行处）。
4. 修改材质变换方式
    - 根据``waifu-tips.js``文件中的注释和已有代码，修改``switch_textures``中的``switch``即可（文件中约235-236行处）。
## waifu.css
### 建议
1. 将看板娘在网页右边加载
    - 方法一：引用新的CSS进行覆盖
    > - 在``waifu.css``文件中添加以下字段：
    ```CSS
    #waifu-toggle {
        right: 0 !important;
        margin-right: -100px !important;
        transition: margin-right 1s !important;
        writing-mode: vertical-lr !important;
    }
    
    #waifu-toggle.waifu-toggle-active {
        margin-right: -40px !important;
    }
    
    #waifu-toggle.waifu-toggle-active:hover {
        margin-right: -20px !important;
    }
    ```
    - 方法二：直接修改
    > - 注释掉``#waifu {}``中的``left: 0;``，并释放``/* right: 0; */``；
    > - 注释掉``#waifu-tool {}``中的``right: -10px;``，并释放``/* left: 10px; */``或``right: 10px;``；
    > - 注释掉``#waifu-toggle {}``中的``left: 0;``，并释放``/* right: 0; */``；
    > - 注释掉``#waifu-toggle {}``中的``margin-left: -100px;``，并释放``/* margin-right: -100px; */``；
    > - 注释掉``#waifu-toggle {}``中的``transition: margin-left 1s;``，并释放``/* transition: margin-right 1s; */``；
    > - 注释掉``#waifu-toggle {}``中的``writing-mode: vertical-rl;``，并释放``/* writing-mode: vertical-lr; */``；
    > - 注释掉``#waifu-toggle.waifu-toggle-active {}``中的``margin-left: -50px;``，并释放``/* margin-right: -40px; */``；
    > - 注释掉``#waifu-toggle.waifu-toggle-active:hover {}``中的``margin-left: -50px;``，并释放``/* margin-right: -20px; */``。
2. 修改工具栏颜色
    - 
3. 修改看板娘出场方向（上/下）
    - 
4. 无论如何不显示对话框
    - 
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
