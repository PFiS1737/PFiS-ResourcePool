(function loadEruda() { // 加载Eruda
    if (localStorage.getItem('Eruda') === 'true') {
        var src = '//cdn.jsdelivr.net/npm/eruda';
        document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
        document.write('<scr' + 'ipt>eruda.init();</scr' + 'ipt>');
    }
})();

function changeEruda() { // 开启/关闭
    if (localStorage.getItem('Eruda') !== 'true') {
        localStorage.setItem('Eruda','true');
    } else if (localStorage.getItem('Eruda') === 'true') {
        localStorage.removeItem('Eruda');
    }
    location.reload();
};

(function stopEruda() { // 不是指定值时停止加载
    if (localStorage.getItem('Eruda') !== 'true' && localStorage.getItem('Eruda') !== null) {
        localStorage.removeItem('Eruda');
        location.reload();
})();

function getErudaPlugin() { // 输出状态
    if (document.getElementById("getErudaDom").checked === 'true') {
        var src = '//cdn.jsdelivr.net/npm/eruda-dom@2.0.0';
        document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
        console.log("Eruda调试器：Dom Plugin 开启");
    }
    if (document.getElementById("getErudaFps").checked === 'true') {
        var src = '//cdn.jsdelivr.net/npm/eruda-fps@2.0.0';
        document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
        console.log("Eruda调试器：Fps Plugin 开启");
    }
    if (document.getElementById("getErudaTiming").checked === 'true') {
        var src = '//cdn.jsdelivr.net/npm/eruda-timing@2.0.0';
        document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
        console.log("Eruda调试器：Timing Plugin 开启");
    }
    if (document.getElementById("getErudaCode").checked === 'true') {
        var src = '//cdn.jsdelivr.net/npm/eruda-code@2.0.0';
        document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
        console.log("Eruda调试器：Code Plugin 开启");
    }
    if (document.getElementById("getErudaEdit").checked === 'true') {
        
        console.log("Eruda调试器：Edit Page 开启");
    }
    location.reload();
};

function writeEruda() { // 输出状态
    if (localStorage.getItem('Eruda') !== 'true') {
        document.write('关闭');
        console.log("Eruda调试器：关闭");
    } else if (localStorage.getItem('Eruda') === 'true') {
        document.write('开启');
        console.log("Eruda调试器：开启");
    }
};
