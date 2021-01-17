(function () {
    if (/live2d-right=true/.test(window.location) || localStorage.getItem('live2d') === 'right') {
        var srcright = '//cdn.jsdelivr.net/gh/PFiS1737/PFiS_Public_Repository@latest/live2d/special/autoload_self-customize.js';
        document.write('<scr' + 'ipt src="' + srcright + '"></scr' + 'ipt>');
    } else if (/live2d-left=true/.test(window.location) || localStorage.getItem('live2d') === 'left') {
        var srcleft = '//cdn.jsdelivr.net/gh/PFiS1737/PFiS_Public_Repository@latest/live2d/special/autoload_self-customize_left.js';
        document.write('<scr' + 'ipt src="' + srcleft + '"></scr' + 'ipt>');
    }
})();
