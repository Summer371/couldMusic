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
        }else {
            return num
        }
    }
}
