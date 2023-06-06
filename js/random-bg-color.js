function makeRandomBgColor(n){
    const bgColor = document.getElementById(n);
    bgColor.addEventListener('mouseover', function(){
        let color = '#';
        color += Math.random().toString(16).slice(2, 8);
        // console.log(color);
        bgColor.style.backgroundColor = color;
    });
}

makeRandomBgColor('div-1');
makeRandomBgColor('div-2');
makeRandomBgColor('div-3');
makeRandomBgColor('div-4');
makeRandomBgColor('div-5');
makeRandomBgColor('div-6');