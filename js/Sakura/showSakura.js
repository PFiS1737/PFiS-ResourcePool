(function SakuraLoad() {
    if (localStorage.getItem('SakuraNumber') != null) {
        var src = '//cdn.jsdelivr.net/gh/PFiS1737/PFiS_Public_Repository@latest/js/Sakura/Sakura.js';
        document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
    }
})();

function SakuraChange() {
    if (localStorage.getItem('SakuraNumber') === null) {
        localStorage.setItem('SakuraNumber','5');
    } else if (localStorage.getItem('SakuraNumber') < 100) {
        localStorage.setItem('SakuraNumber',Number(Number(localStorage.getItem('SakuraNumber')) + 5));
    } else if (localStorage.getItem('SakuraNumber') === '100') {
        localStorage.removeItem('SakuraNumber');
    }
    location.reload();
};

function SakuraGetMax() {
    localStorage.setItem('SakuraMax',Number(document.getElementsByName("SakuraMax").value));
};

(function SakuraChangeStop() {
    if (localStorage.getItem('SakuraNumber') > localStorage.getItem('SakuraMax')) {
        localStorage.removeItem('SakuraNumber');
    }
})();

function SakuraGetElements() {
    localStorage.setItem('SakuraNumber',Number(document.getElementsByName("SakuraNumber").value));
};

function SakuraWrite() {
    if (localStorage.getItem('SakuraNumber') === null) {
        document.write('关闭');
    } else if (localStorage.getItem('SakuraNumber') !== null) {
        document.write('数量：' + localStorage.getItem('SakuraNumber'));
    }
};
