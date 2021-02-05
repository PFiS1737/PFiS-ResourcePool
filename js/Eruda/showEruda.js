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
    }
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
    if (document.getElementById("getEruda").value === 'true') {
        localStorage.setItem('Eruda','true');
    } else {
        localStorage.removeItem('Eruda');
    }
    location.reload();
};

/* 
function getErudaPlugin() { // 获取插件设置
    if (document.getElementById("getErudaDom").checked === true) {
        localStorage.setItem('ErudaDom','true');
    } else {
        localStorage.removeItem('ErudaDom');
    }
    if (document.getElementById("getErudaFps").checked === true) {
        localStorage.setItem('ErudaFps','true');
    } else {
        localStorage.removeItem('ErudaFps');
    }
    if (document.getElementById("getErudaTiming").checked === true) {
        localStorage.setItem('ErudaTiming','true');
    } else {
        localStorage.removeItem('ErudaTiming');
    }
    if (document.getElementById("getErudaCode").checked === true) {
        localStorage.setItem('ErudaCode','true');
    } else {
        localStorage.removeItem('ErudaCode');
    }
    if (document.getElementById("getErudaEdit").checked === true) {
        localStorage.setItem('ErudaEdit','true');
    } else {
        localStorage.removeItem('ErudaEdit');
    }
    location.reload();
};

(function loadErudaPlugin() { // 在控制台输出插件状态并加载插件
    if (localStorage.getItem('ErudaDom') === 'true') {
        var src = '//cdn.jsdelivr.net/npm/eruda-dom@2.0.0';
        document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
        eruda.add(erudaDom);
        console.log("Eruda调试器：Dom Plugin 开启");
        document.getElementById("getErudaDom").checked = 'true';
    } else {
        document.getElementById("getErudaDom").checked = 'false';
    }
    if (localStorage.getItem('ErudaFps') === 'true') {
        var src = '//cdn.jsdelivr.net/npm/eruda-fps@2.0.0';
        document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
        eruda.add(erudaFps);
        console.log("Eruda调试器：Fps Plugin 开启");
        document.getElementById("getErudaFps").checked = 'true';
    } else {
        document.getElementById("getErudaFps").checked = 'false';
    }
    if (localStorage.getItem('ErudaTiming') === 'true') {
        var src = '//cdn.jsdelivr.net/npm/eruda-timing@2.0.0';
        document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
        eruda.add(erudaTiming);
        console.log("Eruda调试器：Timing Plugin 开启");
        document.getElementById("getErudaDoTiming").checked = 'true';
    } else {
        document.getElementById("getErudaTiming").checked = 'false';
    }
    if (localStorage.getItem('ErudaCode') === 'true') {
        var src = '//cdn.jsdelivr.net/npm/eruda-code@2.0.0';
        document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
        eruda.add(erudaCode);
        console.log("Eruda调试器：Code Plugin 开启");
        document.getElementById("getErudaCode").checked = 'true';
    } else {
        document.getElementById("getErudaCode").checked = 'false';
    }
    if (localStorage.getItem('ErudaEdit') === 'true') {
        document.body.contentEditable='true';
        console.log("Eruda调试器：Edit Page 开启");
        document.getElementById("getErudaEdit").checked = 'true';
    } else {
        document.getElementById("getErudaEdit").checked = 'false';
    }
})();

function writeErudaPlugin(PluginName) { // 输出插件状态
    if (PluginName = 'Dom') {
        document.write(localStorage.setItem('ErudaDom'));
    } else if (PluginName = 'Fps') {
        document.write(localStorage.setItem('ErudaFps'));
    } else if (PluginName = 'Timing') {
        document.write(localStorage.setItem('ErudaTiming'));
    } else if (PluginName = 'Code') {
        document.write(localStorage.setItem('ErudaCode'));
    } else if (PluginName = 'Edit') {
        document.write(localStorage.setItem('ErudaEdit'));
    }
};
*/
