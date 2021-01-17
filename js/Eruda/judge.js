(function showEruda() {
    var eruda = localStorage.getItem('eruda');
    if (eruda === 'false') {
        self.location.href="javascript:localStorage.setItem('eruda','true')";
    } else if (eruda === 'true') {
        self.location.href="javascript:localStorage.setItem('eruda','false')";
    }
}
