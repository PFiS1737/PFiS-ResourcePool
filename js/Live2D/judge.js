(function showEruda() {
    var live2d = localStorage.getItem('live2d');
    if (live2d === 'false') {
        localStorage.setItem('live2d','right');
        location.reload();
    } else if (eruda === 'right') {
        localStorage.setItem('live2d','left');
        location.reload();
    } else if (eruda === 'left') {
        localStorage.setItem('live2d','false');
        location.reload();
    }
}
