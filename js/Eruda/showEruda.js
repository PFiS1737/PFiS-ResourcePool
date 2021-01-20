(function ErudaLoad() {
    if (localStorage.getItem('eruda') === 'true') {
        var src = '//cdn.jsdelivr.net/npm/eruda';
        document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
        document.write('<scr' + 'ipt>eruda.init();</scr' + 'ipt>');
    }
})();

function ErudaJudge() {
    if (localStorage.getItem('eruda') === null) {
        localStorage.setItem('eruda','true');
        location.reload();
    } else if (localStorage.getItem('eruda') === 'true') {
        localStorage.removeItem('eruda');
        location.reload();
    }
};

function ErudaWrite() {
    if (localStorage.getItem('eruda') === null) {
        document.write('关');
    } else if (localStorage.getItem('eruda') === 'true') {
        document.write('开');
    }
};
