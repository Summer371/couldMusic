export default {
    playCount(n){
        let num=n;
        if(n>100000){
            num = Math.floor(n/10000)
        }
        return  num+"万"
    }
}