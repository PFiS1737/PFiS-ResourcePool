(function showEruda() {
    let eruda = localStorage.getItem('eruda');
    if (eruda === 'false') {
        localStorage.setItem('eruda','true');
        location.reload();
    } else if (eruda === 'true') {
        localStorage.setItem('eruda','false');
        location.reload();
    }
})();
