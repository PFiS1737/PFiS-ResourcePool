(function loadLive2D() { // 加载看板娘
    if (localStorage.getItem('Live2D') === 'true' && localStorage.getItem('Live2DPlace') === 'right') {
        var src = '//cdn.jsdelivr.net/gh/PFiS1737/PFiS_Public_Repository@latest/live2d/special/autoload_self-customize.js';
        document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
    } else if (localStorage.getItem('Live2D') === 'true' && localStorage.getItem('Live2DPlace') === 'left') {
        var src = '//cdn.jsdelivr.net/gh/PFiS1737/PFiS_Public_Repository@latest/live2d/special/autoload_self-customize_left.js';
        document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
    }
})();

function changeLive2D() { // 通过按钮设置
    if (localStorage.getItem('Live2D') === null) {
        localStorage.setItem('Live2D','true');
    } else if (localStorage.getItem('Live2D') === 'true') {
        localStorage.removeItem('Live2D');
    }
    location.reload();
};

function changeLive2DPlace() { // 通过按钮设置位置
    if (localStorage.getItem('Live2DPlace') === null) {
        localStorage.setItem('Live2DPlace','right');
    } else if (localStorage.getItem('Live2DPlace') === 'right') {
        localStorage.setItem('Live2DPlace','left');
    } else if (localStorage.getItem('Live2DPlace') === 'left') {
        localStorage.removeItem('Live2DPlace');
    }
    location.reload();
};

function getLive2D() { // 获取看板娘信息
    localStorage.setItem('Live2D',document.getElementById("Live2D").value);
    localStorage.setItem('Live2DPlace',document.getElementById("Live2DPlace").value);
    location.reload();
};

(function removeLive2D() { // 不是指定值时移除
    if (localStorage.getItem('Live2DPlace') !== 'right' && localStorage.getItem('Live2DPlace') !== 'left' && localStorage.getItem('Live2DPlace') !== null) {
        localStorage.removeItem('Live2DPlace');
    }
    if (localStorage.getItem('Live2D') !== 'true' && localStorage.getItem('Live2D') !== null) {
        localStorage.removeItem('Live2D');
    }
    location.reload();
})();

function writeLive2D() { // 输出状态
    if (localStorage.getItem('Live2D') === null) {
        document.write('关闭');
        console.log("Live2D看板娘：关闭");
    } else if (localStorage.getItem('Live2D') === 'true' && localStorage.getItem('Live2DPlace') === 'right') {
        document.write('右边');
        console.log("Live2D看板娘：开启；位置：右边");
    } else if (localStorage.getItem('Live2D') === 'true' && localStorage.getItem('Live2DPlace') === 'left') {
        document.write('左边');
        console.log("Live2D看板娘：开启；位置：左边");
    }
};
