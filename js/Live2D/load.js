(function () {
    if (/live2d=true/.test(window.location) || localStorage.getItem('live2d') === 'true') {
        var src = '//cdn.jsdelivr.net/gh/PFiS1737/PFiS_Public_Repository@latest/live2d/special/autoload_self-customize.js';
        document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
    }
})();
