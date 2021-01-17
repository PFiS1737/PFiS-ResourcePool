(function showSakura() {
    var sakura = localStorage.getItem('sakura');
    if (sakura === 'false') {
        localStorage.setItem('sakura','native');
        location.reload();
    } else if (sakura === 'native') {
        localStorage.setItem('sakura','half');
        location.reload();
    } else if (sakura === 'half') {
        localStorage.setItem('sakura','quarter');
        location.reload();
    } else if (sakura === 'quarter') {
        localStorage.setItem('sakura','less');
        location.reload();
    } else if (sakura === 'less') {
        localStorage.setItem('sakura','false');
        location.reload();
    }
})();
