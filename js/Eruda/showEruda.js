(function ErudaLoad() {
    if (localStorage.getItem('eruda') === 'true') {
        document.write('<scr' + 'ipt src="' + '//cdn.jsdelivr.net/npm/eruda' + '"></scr' + 'ipt>');
        document.write('<scr' + 'ipt>eruda.init();</scr' + 'ipt>');
    }
})();

(function ErudaJudge() {
    if (localStorage.getItem('eruda') === 'null') {
        localStorage.setItem('eruda','true');
        location.reload();
    } else if (localStorage.getItem('eruda') === 'false') {
        localStorage.setItem('eruda','true');
        location.reload();
    } else if (localStorage.getItem('eruda') === 'true') {
        localStorage.setItem('eruda','false');
        location.reload();
    }
})();

(function ErudaWrite() {
    if (localStorage.getItem('eruda') === 'null') {
        document.write('关');
    } else if (localStorage.getItem('eruda') === 'false') {
        document.write('关');
    } else if (localStorage.getItem('eruda') === 'true') {
        document.write('开');
    }
})();
