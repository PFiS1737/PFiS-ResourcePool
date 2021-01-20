(function SakuraLoad() {
    if (localStorage.getItem('sakura') === 'native') {
        var src = '//cdn.jsdelivr.net/gh/PFiS1737/PFiS_Public_Repository@latest/js/Sakura/Sakura-native.js';
        document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
    } else if (localStorage.getItem('sakura') === 'half') {
        var src = '//cdn.jsdelivr.net/gh/PFiS1737/PFiS_Public_Repository@latest/js/Sakura/Sakura-half.js';
        document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
    } else if (localStorage.getItem('sakura') === 'quarter') {
        var src = '//cdn.jsdelivr.net/gh/PFiS1737/PFiS_Public_Repository@latest/js/Sakura/Sakura-quarter.js';
        document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
    } else if (localStorage.getItem('sakura') === 'less') {
        var src = '//cdn.jsdelivr.net/gh/PFiS1737/PFiS_Public_Repository@latest/js/Sakura/Sakura-less.js';
        document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
    }
})();

function SakuraJudge() {
    if (localStorage.getItem('sakura') === null) {
        localStorage.setItem('sakura','native');
        location.reload();
    } else if (localStorage.getItem('sakura') === 'native') {
        localStorage.setItem('sakura','half');
        location.reload();
    } else if (localStorage.getItem('sakura') === 'half') {
        localStorage.setItem('sakura','quarter');
        location.reload();
    } else if (localStorage.getItem('sakura') === 'quarter') {
        localStorage.setItem('sakura','less');
        location.reload();
    } else if (localStorage.getItem('sakura') === 'less') {
        localStorage.removeItem('sakura');
        location.reload();
    }
};

function SakuraWrite() {
    if (localStorage.getItem('sakura') === null) {
        document.write('关闭');
    } else if (localStorage.getItem('sakura') === 'native') {
        document.write('较多');
    } else if (localStorage.getItem('sakura') === 'half') {
        document.write('一半');
    } else if (localStorage.getItem('sakura') === 'quarter') {
        document.write('较少');
    } else if (localStorage.getItem('sakura') === 'less') {
        document.write('很少');
    }
};
