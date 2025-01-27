export function sattoloCycle(items: string[]) {
    const res = [...items];

    for (let i = res.length; i-- > 1; ) {
        const j = Math.floor(Math.random() * i);
        const tmp = res[i];
        res[i] = res[j];
        res[j] = tmp;
    }

    return res;
}