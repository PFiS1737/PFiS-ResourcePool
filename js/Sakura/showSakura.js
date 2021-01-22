(function SakuraLoad() { // 加载樱花效果
    if (localStorage.getItem('SakuraNumber') != null) {
        var src = '//cdn.jsdelivr.net/gh/PFiS1737/PFiS_Public_Repository@latest/js/Sakura/Sakura.js';
        document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
        localStorage.removeItem('SakuraNumber');
    }
})();

function SakuraChange() { // 切换樱花数量
    if (localStorage.getItem('SakuraNumber') === null) {
        localStorage.setItem('SakuraNumber','5');
    } else if (localStorage.getItem('SakuraNumber') < 100) {
        localStorage.setItem('SakuraNumber',Number(Number(localStorage.getItem('SakuraNumber')) + 5));
    } else if (localStorage.getItem('SakuraNumber') === '100') {
        localStorage.removeItem('SakuraNumber');
    }
    location.reload();
};

function SakuraGetElements() { // 获取樱花数量
    localStorage.setItem('SakuraNumber',Number(document.getElementsByName("SakuraNumber").value));
    location.reload();
};

function SakuraGetMax() { // 获取樱花数量最大值
    localStorage.setItem('SakuraMax',Number(document.getElementsByName("SakuraMax").value));
};

(function SakuraStop() { // 超过最大值时移除 SakuraNumber
    if (localStorage.getItem('SakuraNumber') > localStorage.getItem('SakuraMax')) {
        localStorage.removeItem('SakuraNumber');
        location.reload();
    }
})();

function SakuraWrite() { // 输出状态
    if (localStorage.getItem('SakuraNumber') === null) {
        document.write('关闭');
        console.log("樱花效果：关闭");
    } else if (localStorage.getItem('SakuraNumber') !== null) {
        document.write('数量：' + localStorage.getItem('SakuraNumber'));
        console.log("樱花效果：开启；樱花数量：" + localStorage.getItem('SakuraNumber'));
    }
};
