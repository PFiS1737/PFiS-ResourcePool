# 信息
Copy from [stevenjoezhang/live2d-widget](https://github.com/stevenjoezhang/live2d-widget),[米米的博客](https://zhangshuqiao.org).<br />
Else API from [米米的博客](https://zhangshuqiao.org).<br />
基本用法：``https://cdn.jsdelivr.net/gh/PFiS1737/PFiS_Public_Repository@latest/live2d/file``<br />
在网站中添加：
```html
<script src="https://cdn.jsdelivr.net/gh/PFiS1737/PFiS_Public_Repository@latest/live2d/autoload.js"></script>
```
依赖Font Awesome：在``<head>``中添加
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css">
```
示例网站：[demo.html](http://pfis.infinityfreeapp.com/live2d_widget_demo.html)
# 开发建议及常见问题
打开文件以查看更多注释，本文更多的是给像我这样的萌新看的。
## autoload.js
### 建议
1. 设置live2d_path参数的路径
    - 根据autoload.js文件中的注释和已有代码进行修改即可（文件中约1-5行处），建议使用``//``注释掉已有代码。
    - 路径链接后面必须加``/``。
2. 修改最低显示宽度
    - 根据autoload.js文件中的注释和已有代码修改``screen.width >= 768``中的``768``即可（文件中约30行处）。
3. 更换API
    - 根据autoload.js文件中的注释和已有代码，释放已有apiPath或cdnPath(只能其一)，并注释掉多余的API即可（文件中约38-40行处），或添加自行搭建的API。
### 问题
1. 我如何搭建API？
    - 可参照[fghrsh/live2d_api](https://github.com/fghrsh/live2d_api)和[fghrsh的文章](https://www.fghrsh.net/post/170.html)。
    > 从[fghrsh/live2d_api](https://github.com/fghrsh/live2d_api)下载源码并放到网站目录  
    > 替换autoload.js里的API链接为``http[s]://网站域名/API所在目录/``  
2. autoload.js文件中已有的apiPath和cdnPath有什么区别？
    - ``https://live2d.fghrsh.net/api/``是[stevenjoezhang/live2d-widget](https://github.com/stevenjoezhang/live2d-widget)中附带的[fghrsh/live2d_api](https://github.com/fghrsh/live2d_api)的API。共有7个模型，有大量材质，速度较快。不足的是1和7模型在显示时与屏幕下边缘存在较大缝隙。
    - ``https://api.zsq.im/live2d/``来自[stevenjoezhang/live2d-widget](https://github.com/stevenjoezhang/live2d-widget)中提到的[米米的博客](https://zhangshuqiao.org)的[custom.js](https://zhangshuqiao.org/lib/custom.js)文件（别忘我是这么找着的，问就是扒网站源代码）。在修复了上面那个API中的问题的同时，又添加了数十个新模型。可速度却大大降低。
    - ``https://cdn.jsdelivr.net/gh/fghrsh/live2d_api/``是[stevenjoezhang/live2d-widget](https://github.com/stevenjoezhang/live2d-widget)中默认的API，使用[jsDelivr](cdn.jsdelivr.net)引用[fghrsh/live2d_api](https://github.com/fghrsh/live2d_api)中的文件而搭建成的API，受[jsDelivr](cdn.jsdelivr.net)缓存影响较大。
3. 我的手机不能显示看板娘，我要怎么办？
    - 参见上文中建议2-修改最低显示宽度。
## waifu-tips.js
### 建议
1. 修改对话内容
    - 所有汉字都能随便改。
    - 不要试图在``showMessage()``中添加新的字段来随机输出，不过``messageArray = []``可以。
2. 修改工具栏中关于页转跳链接
    - 根据waifu-tips.js文件中的注释和已有代码进行修改即可（文件中约81-82行处）。
3. 修改首次访问时加载的模型及材质
    - 根据waifu-tips.js文件中的注释和已有代码进行修改即可（文件中约166-169行处）。
4. 修改材质变换方式
    - 根据waifu-tips.js文件中的注释和已有代码，修改``switch_textures``中的``switch``即可（文件中约235-236行处）。
## waifu.css
### 建议
1. 
    - 
2. 
    - 
3. 
    - 
4. 
    - 
## waifu-tips.json
根据自己网站的需要进行修改，
# 其他问题
# 更多内容请参见
[stevenjoezhang/live2d-widget](https://github.com/stevenjoezhang/live2d-widget)
[fghrsh/live2d_api](https://github.com/fghrsh/live2d_api)
