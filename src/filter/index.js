export default {
    playCount(n){
        let num=n;
        if(n>100000){
            num = Math.floor(n/10000)
        }
        return  num+"万"
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
        return Math.floor(v/60)+":"+Math.floor(v%60/60)
    }
}
