(function loadEruda() { // 加载Eruda
    if (localStorage.getItem('Eruda') === 'true') {
        var src = '//cdn.jsdelivr.net/npm/eruda';
        document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
        document.write('<scr' + 'ipt>eruda.init();</scr' + 'ipt>');
    }
})();

(function removeEruda() { // 不是指定值时移除
    if (localStorage.getItem('Eruda') !== 'true' && localStorage.getItem('Eruda') !== null) {
        localStorage.removeItem('Eruda');
        location.reload();
})();

function changeEruda() { // 通过点击开关
    if (localStorage.getItem('Eruda') !== 'true') {
        localStorage.setItem('Eruda','true');
    } else if (localStorage.getItem('Eruda') === 'true') {
        localStorage.removeItem('Eruda');
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

function getEruda() { // 获取设置
    if (document.getElementById("getErudaDom").value === 'true') {
        localStorage.setItem('Eruda','true');
    } else if (document.getElementById("getErudaDom").value === 'false') {
        localStorage.removeItem('Eruda');
    }
};

function getErudaPlugin() { // 获取插件设置
    if (document.getElementById("getErudaDom").checked === 'true') {
        localStorage.setItem('ErudaDom','true');
    }
    if (document.getElementById("getErudaFps").checked === 'true') {
        localStorage.setItem('ErudaFps','true');
    }
    if (document.getElementById("getErudaTiming").checked === 'true') {
        localStorage.setItem('ErudaTiming','true');
    }
    if (document.getElementById("getErudaCode").checked === 'true') {
        localStorage.setItem('ErudaCode','true');
    }
    if (document.getElementById("getErudaEdit").checked === 'true') {
        localStorage.setItem('ErudaEdit','true');
    }
    location.reload();
};

(function loadErudaPlugin() { // 输出插件状态并加载插件
    if (localStorage.getItem('ErudaDom') === 'true') {
        var src = '//cdn.jsdelivr.net/npm/eruda-dom@2.0.0';
        document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
        console.log("Eruda调试器：Dom Plugin 开启");
        document.getElementById("getErudaDom").checked = 'true'
    }
    if (localStorage.getItem('ErudaFps') === 'true') {
        var src = '//cdn.jsdelivr.net/npm/eruda-fps@2.0.0';
        document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
        console.log("Eruda调试器：Fps Plugin 开启");
        document.getElementById("getErudaFps").checked = 'true'
    }
    if (localStorage.getItem('ErudaTiming') === 'true') {
        var src = '//cdn.jsdelivr.net/npm/eruda-timing@2.0.0';
        document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
        console.log("Eruda调试器：Timing Plugin 开启");
        document.getElementById("getErudaDoTiming").checked = 'true'
    }
    if (localStorage.getItem('ErudaCode') === 'true') {
        var src = '//cdn.jsdelivr.net/npm/eruda-code@2.0.0';
        document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
        console.log("Eruda调试器：Code Plugin 开启");
        document.getElementById("getErudaCode").checked = 'true'
    }
    if (localStorage.getItem('ErudaEdit') === 'true') {
        document.body.contentEditable='true';
        console.log("Eruda调试器：Edit Page 开启");
        document.getElementById("getErudaEdit").checked = 'true'
    }
})();
