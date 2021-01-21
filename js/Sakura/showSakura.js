(function SakuraLoad() {
    if (localStorage.getItem('sakura') !== null) {
        var src = '//cdn.jsdelivr.net/gh/PFiS1737/PFiS_Public_Repository@latest/js/Sakura/Sakura.js';
        document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
    }
})();

function SakuraJudge() {
    if (localStorage.getItem('sakura') !== null) {
        var SakuraNumberAdd = Number(localStorage.getItem('sakura') + 1)
        localStorage.setItem('sakura',SakuraNumberAdd);
    }
    location.reload();
};

function SakuraWrite() {
    if (localStorage.getItem('sakura') === null) {
        document.write('关闭');
    } else if (localStorage.getItem('sakura') === 'few') {
        document.write('很多');
    } else if (localStorage.getItem('sakura') === 'more') {
        document.write('较多');
    } else if (localStorage.getItem('sakura') === 'half') {
        document.write('适中');
    } else if (localStorage.getItem('sakura') === 'less') {
        document.write('较少');
    } else if (localStorage.getItem('sakura') === 'few') {
        document.write('很少');
    }
};
