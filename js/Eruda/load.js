(function () {
    if (/eruda=true/.test(window.location) || localStorage.getItem('eruda') === 'true') {
        var src = '//cdn.jsdelivr.net/npm/eruda';
        document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
        document.write('<scr' + 'ipt>eruda.init();</scr' + 'ipt>');
    }
})();

(function showEruda() {
    var eruda = localStorage.getItem('eruda');
    if (eruda === 'false') {
        self.location.href="javascript:localStorage.setItem('eruda','true')";
    } else if (eruda === 'true') {
        self.location.href="javascript:localStorage.setItem('eruda','false')";
    }
}
