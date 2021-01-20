(function SakuraLoad() {
    if (localStorage.getItem('sakura') === 'lot') {
        var src = '//cdn.jsdelivr.net/gh/PFiS1737/PFiS_Public_Repository@latest/js/Sakura/Sakura-lot.js';
        document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
    } else if (localStorage.getItem('sakura') === 'more') {
        var src = '//cdn.jsdelivr.net/gh/PFiS1737/PFiS_Public_Repository@latest/js/Sakura/Sakura-more.js';
        document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
    } else if (localStorage.getItem('sakura') === 'half') {
        var src = '//cdn.jsdelivr.net/gh/PFiS1737/PFiS_Public_Repository@latest/js/Sakura/Sakura-half.js';
        document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
    } else if (localStorage.getItem('sakura') === 'less') {
        var src = '//cdn.jsdelivr.net/gh/PFiS1737/PFiS_Public_Repository@latest/js/Sakura/Sakura-less.js';
        document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
    } else if (localStorage.getItem('sakura') === 'few') {
        var src = '//cdn.jsdelivr.net/gh/PFiS1737/PFiS_Public_Repository@latest/js/Sakura/Sakura-few.js';
        document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
    }
})();

function SakuraJudge() {
    if (localStorage.getItem('sakura') === null) {
        localStorage.setItem('sakura','lot');
     //   location.reload();
    } else if (localStorage.getItem('sakura') === 'lot') {
        localStorage.setItem('sakura','more');
      //  location.reload();
    } else if (localStorage.getItem('sakura') === 'more') {
        localStorage.setItem('sakura','half');
      //  location.reload();
    } else if (localStorage.getItem('sakura') === 'half') {
        localStorage.setItem('sakura','less');
      //  location.reload();
    } else if (localStorage.getItem('sakura') === 'less') {
        localStorage.setItem('sakura','few');
      //  location.reload();
    } else if (localStorage.getItem('sakura') === 'few') {
        localStorage.removeItem('sakura');
       // location.reload();
    }
    location.reload();
};

function SakuraWrite() {
    if (localStorage.getItem('sakura') === null) {
        document.write('关闭');
    } else if (localStorage.getItem('sakura') === 'few') {
        document.write('很多');
    } else if (localStorage.getItem('sakura') === 'more') {
        document.write('较多');
    } else if (localStorage.getItem('sakura') === 'half') {
        document.write('适中');
    } else if (localStorage.getItem('sakura') === 'less') {
        document.write('较少');
    } else if (localStorage.getItem('sakura') === 'few') {
        document.write('很少');
    }
};
