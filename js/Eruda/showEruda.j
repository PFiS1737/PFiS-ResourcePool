(function ErudaLoad() {
    if (localStorage.getItem('eruda') === 'true') {
        var src = '//cdn.jsdelivr.net/npm/eruda';
        document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
        document.write('<scr' + 'ipt>eruda.init();</scr' + 'ipt>');
    }
})();

(function ErudaJudge() {
    let eruda = localStorage.getItem('eruda');
    if (eruda === 'null') {
        localStorage.setItem('eruda','true');
        location.reload();
    } else if (eruda === 'false') {
        localStorage.setItem('eruda','true');
        location.reload();
    } else if (eruda === 'true') {
        localStorage.setItem('eruda','false');
        location.reload();
    }
})();

(function ErudaWrite() {
    let eruda = localStorage.getItem('eruda');
    if (eruda === 'null') {
        document.write('关');
    } else if (eruda === 'false') {
        document.write('关');
    } else if (eruda === 'true') {
        document.write('开');
    }
})();
