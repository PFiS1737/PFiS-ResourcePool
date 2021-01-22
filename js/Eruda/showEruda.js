(function ErudaLoad() {
    if (localStorage.getItem('Eruda') === 'true') {
        var src = '//cdn.jsdelivr.net/npm/eruda';
        document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
        document.write('<scr' + 'ipt>eruda.init();</scr' + 'ipt>');
    }
})();

function ErudaJudge() {
    if (localStorage.getItem('Eruda') === null) {
        localStorage.setItem('Eruda','true');
    } else if (localStorage.getItem('Eruda') === 'true') {
        localStorage.removeItem('Eruda');
    }
    location.reload();
};

function ErudaWrite() {
    if (localStorage.getItem('Eruda') === null) {
        document.write('关闭');
        console.log("Eruda调试器：关闭");
    } else if (localStorage.getItem('Eruda') === 'true') {
        document.write('开启');
        console.log("Eruda调试器：开启");
    }
};
