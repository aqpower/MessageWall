//时间
export const dataOne = (e) => { 
    let d = new Date(e);
    let Y = d.getFullYear();
    let M = d.getMonth() + 1;
    let D = d.getDate();
    if (D < 10) {
        D = '0' + D;
    }
    if (M < 10) {
        M = '0' + M;
    }
    let dates = Y + '.' + M + '.' + D;
    return dates;
}