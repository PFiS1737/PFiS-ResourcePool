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
2. 更换API
    - 根据autoload.js文件中的注释和已有代码，释放已有apiPath或cdnPath(只能其一)，并注释掉多余的API即可（文件中约38-40行处），或添加自行搭建的API。
### 问题
1. 我如何搭建API？
    - 参照[fghrsh/live2d_api](https://github.com/fghrsh/live2d_api)即可，不建议萌新自行搭建，有一定难度。
2. autoload.js文件中已有的apiPath和cdnPath有什么区别？
    - ``https://live2d.fghrsh.net/api/``是[stevenjoezhang/live2d-widget](https://github.com/stevenjoezhang/live2d-widget)中附带的[fghrsh/live2d_api](https://github.com/fghrsh/live2d_api)的API。共有7个模型，有大量材质，速度较快。不足的是1和7模型在显示时与屏幕下边缘存在较大缝隙。
    - ``https://api.zsq.im/live2d/``来自[米米的博客](https://zhangshuqiao.org)的[custom.js](https://zhangshuqiao.org/lib/custom.js)文件。在修复了上面那个API中的问题的同时，有添加了数十个新模型。可速度却大大降低。
    - ``https://cdn.jsdelivr.net/gh/fghrsh/live2d_api/``是[stevenjoezhang/live2d-widget](https://github.com/stevenjoezhang/live2d-widget)中默认的API，在保留第一个API中存在的问题的同时，只有模型6可以更换材质，模型5可随缘更换。不能通过更换waifu-tips.js中的初始模型解决，预计可能原因是在API中删除的对应材质。
## waifu-tips.js
### 建议
1. 修改对话内容
    - 所有汉字都能随便改。
    - 不要试图在``showMessage()``中添加新的字段来随机输出，不过``messageArray = []``可以。
2. 修改工具栏中关于页转跳链接
    - 根据waifu-tips.js文件中的注释和已有代码进行修改即可（文件中约81-82行处），建议使用``//``注释掉已有代码。
3. 
## waifu.css
- 
- 
- 
