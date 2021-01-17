(function () {
    if (/live2d-right=true/.test(window.location) || localStorage.getItem('live2d') === 'true') {
        var src-right = '//cdn.jsdelivr.net/gh/PFiS1737/PFiS_Public_Repository@latest/live2d/special/autoload_self-customize.js';
        document.write('<scr' + 'ipt src="' + src-right + '"></scr' + 'ipt>');
    }
    if (/live2d-left=true/.test(window.location) || localStorage.getItem('live2d') === 'true') {
        var src-left = '//cdn.jsdelivr.net/gh/PFiS1737/PFiS_Public_Repository@latest/live2d/special/autoload_self-customize.js';
        document.write('<scr' + 'ipt src="' + src-left + '"></scr' + 'ipt>');
    }
})();
