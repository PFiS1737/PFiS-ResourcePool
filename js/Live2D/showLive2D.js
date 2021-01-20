(function Live2DLoad() {
    if (localStorage.getItem('live2d') === 'right') {
        var src = '//cdn.jsdelivr.net/gh/PFiS1737/PFiS_Public_Repository@latest/live2d/special/autoload_self-customize.js';
        document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
    } else if (localStorage.getItem('live2d') === 'left') {
        var src = '//cdn.jsdelivr.net/gh/PFiS1737/PFiS_Public_Repository@latest/live2d/special/autoload_self-customize_left.js';
        document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
    }
})();

function Live2DJudge() {
    if (localStorage.getItem('live2d') === 'null') {
        localStorage.setItem('live2d','right');
        location.reload();
    } else if (localStorage.getItem('live2d') === 'false') {
        localStorage.setItem('live2d','right');
        location.reload();
    } else if (localStorage.getItem('live2d') === 'right') {
        localStorage.setItem('live2d','left');
        location.reload();
    } else if (localStorage.getItem('live2d') === 'left') {
        localStorage.setItem('live2d','false');
        location.reload();
    }
};

function Live2DWrite() {
    if (localStorage.getItem('live2d') === 'null') {
        document.write('关');
    } else if (localStorage.getItem('live2d') === 'false') {
        document.write('关');
    } else if (localStorage.getItem('live2d') === 'right') {
        document.write('右');
    } else if (localStorage.getItem('live2d') === 'left') {
        document.write('左');
    }
};
