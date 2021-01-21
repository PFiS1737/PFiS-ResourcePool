(function SakuraLoad() {
    if (localStorage.getItem('sakura') != null) {
        var src = '//cdn.jsdelivr.net/gh/PFiS1737/PFiS_Public_Repository@latest/js/Sakura/Sakura.js';
        document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
    }
})();

function SakuraJudge() {
    if (localStorage.getItem('sakura') === null) {
        localStorage.setItem('sakura','5');
    } else if (localStorage.getItem('sakura') < 100) {
        localStorage.setItem('sakura',Number(Number(localStorage.getItem('sakura')) + 5));
    } else if (localStorage.getItem('sakura') === 100) {
        localStorage.removeItem('sakura');
    }
    location.reload();
};

function SakuraUploadData() {
    
};

function SakuraWrite() {
    if (localStorage.getItem('sakura') === null) {
        document.write('关闭');
    } else if (localStorage.getItem('sakura') !== null) {
        document.write('数量：' + localStorage.getItem('sakura'));
    }
};
