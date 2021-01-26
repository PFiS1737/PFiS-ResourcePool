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
    if (document.getElementById("getErudaDom").indeterminate === 'true') {
        document.write('关闭');
        console.log("Eruda调试器：Dom Plugin 开启");
    } else if (document.getElementById("getErudaFps").indeterminate === 'true') {
        document.write('开启');
        console.log("Eruda调试器：Fps Plugin 开启");
    } else if (document.getElementById("getErudaTiming").indeterminate === 'true') {
        document.write('开启');
        console.log("Eruda调试器：Timing Plugin 开启");
    } else if (document.getElementById("getErudaCode").indeterminate === 'true') {
        document.write('开启');
        console.log("Eruda调试器：Code Plugin 开启");
    } else if (document.getElementById("getErudaEdit").indeterminate === 'true') {
        document.write('开启');
        console.log("Eruda调试器：Edit Page 开启");
    }
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
