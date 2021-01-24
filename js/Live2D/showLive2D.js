(function Live2DLoad() { // 加载看板娘
    if (localStorage.getItem('Live2D') === 'right') {
        var src = '//cdn.jsdelivr.net/gh/PFiS1737/PFiS_Public_Repository@latest/live2d/special/autoload_self-customize.js';
        document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
    } else if (localStorage.getItem('Live2D') === 'left') {
        var src = '//cdn.jsdelivr.net/gh/PFiS1737/PFiS_Public_Repository@latest/live2d/special/autoload_self-customize_left.js';
        document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
    }
})();

function Live2DChange() { // 改变看板娘位置
    if (localStorage.getItem('Live2D') === null) {
        localStorage.setItem('Live2D','right');
    } else if (localStorage.getItem('Live2D') === 'right') {
        localStorage.setItem('Live2D','left');
    } else if (localStorage.getItem('Live2D') === 'left') {
        localStorage.removeItem('Live2D');
    }
    location.reload();
};

function SakuraGetElements() { // 获取看板娘位置信息
    localStorage.setItem('Live2D',document.getElementById("Live2D").value);
    location.reload();
};

(function Live2DStop() { // 设置为非选定值时移除 Live2D
    if (localStorage.getItem('Live2D') !== 'right' && localStorage.getItem('Live2D') !== 'left' && localStorage.getItem('Live2D') !== null) {
        localStorage.removeItem('Live2D');
        location.reload();
    }
})();

function Live2DWrite() { // 输出状态
    if (localStorage.getItem('Live2D') === null) {
        document.write('关闭');
        console.log("Live2D看板娘：关闭");
    } else if (localStorage.getItem('Live2D') === 'right') {
        document.write('右边');
        console.log("Live2D看板娘：开启；位置：右边");
    } else if (localStorage.getItem('Live2D') === 'left') {
        document.write('左边');
        console.log("Live2D看板娘：开启；位置：左边");
    }
};
