export default {
    playCount(n){
        let num=n;
        if(n>100000){
            num = Math.floor(n/10000)
        }
        return  num+"万"
    },
    djCount(n) {
        let num = n;
        if (num > 10000) {
            num = parseInt(n / 1000)
            return num / 10 + "万"
        } else {
            return num
        }
    },
    date(v){
        const time = new Date(v);
        return time.getFullYear()+"-"+
            (time.getMonth()+1).toString().padStart(2,"0")+"-"+
            (time.getDate()).toString().padStart(2,"0")+" "+
            (time.getHours()).toString().padStart(2,"0")+":"+
            (time.getMinutes()).toString().padStart(2,"0")+":"+
            (time.getSeconds()).toString().padStart(2,"0");
    },
    dateMonth(v){
        const time = new Date(v);
        return(time.getMonth()+1).toString().padStart(2,"0");
    },
    dateDay(v){
        const time = new Date(v);
        return(time.getDate()).toString().padStart(2,"0");
    },
    songTime(v){
        return Math.floor(v/60)+":"+(Math.round(v%60)>=10?Math.round(v%60):"0"+Math.round(v%60))
    },
    FFtime(v){
        var minutes = parseInt((v% (1000 * 60 * 60)) / (1000 * 60));
        var seconds = (v% (1000 * 60)) / 1000;
        return   minutes + ":" + Math.floor(seconds) ;
    }
}
