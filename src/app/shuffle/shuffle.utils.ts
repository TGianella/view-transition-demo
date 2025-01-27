export function sattoloCycle(items: string[]) {
    const res = [...items];

    for (var i = res.length; i-- > 1; ) {
        var j = Math.floor(Math.random() * i);
        var tmp = res[i];
        res[i] = res[j];
        res[j] = tmp;
    }

    return res;
}