(function () {
    if (localStorage.getItem('sakura') === 'native') {
        var srcnative = '//cdn.jsdelivr.net/gh/PFiS1737/PFiS_Public_Repository@latest/js/Sakura/Sakura-native.js';
        document.write('<scr' + 'ipt src="' + srcnative + '"></scr' + 'ipt>');
    } else if (localStorage.getItem('sakura') === 'half') {
        var srchalf = '//cdn.jsdelivr.net/gh/PFiS1737/PFiS_Public_Repository@latest/js/Sakura/Sakura-half.js';
        document.write('<scr' + 'ipt src="' + srchalf + '"></scr' + 'ipt>');
    } else if (localStorage.getItem('sakura') === 'quarter') {
        var srcquarter = '//cdn.jsdelivr.net/gh/PFiS1737/PFiS_Public_Repository@latest/js/Sakura/Sakura-quarter.js';
        document.write('<scr' + 'ipt src="' + srcquarter + '"></scr' + 'ipt>');
    } else if (localStorage.getItem('sakura') === 'less') {
        var srcless = '//cdn.jsdelivr.net/gh/PFiS1737/PFiS_Public_Repository@latest/js/Sakura/Sakura-less.js';
        document.write('<scr' + 'ipt src="' + srcless + '"></scr' + 'ipt>');
    }
})();
