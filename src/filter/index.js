export default {
    playCount(n){
        let num=n;
        if(n>100000){
            num = Math.round(n/100000)
        }
        return  num+"万"
    }
}
