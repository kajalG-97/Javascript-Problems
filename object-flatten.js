function flattenObject(obj, parentKey = '', result = {}) {
    for (let key in obj) {
        const newKey = parentKey ? `${parentKey}.${key}` : key;

        if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
            flattenObject(obj[key], newKey, result);
        } else {
            result[newKey] = obj[key];
        }
    }
    return result;
}

let nestedObject = {
    a: {
        b: { c: 1 },
        d: 2,
        c: {
            w: 2,
            l: { k: [2] }
        }
    }, e: 3
};
console.log(flattenObject({ a: { b: [1, [2], 3], c: { d: 4 } }, e: 5 }));
// { 'a.b.c': 1, 'a.d': 2, e: 3 }

function unflattenObject(flatObj) {
    const result = {};
    for (let key in flatObj) {
        const keys = key.split('.');
        console.log({ keys });

        keys.reduce((acc, part, idx) => {
            console.log({ acc, part, idx });

            if (idx === keys.length - 1) {
                acc[part] = flatObj[key];
            } else {
                acc[part] = acc[part] || {};
            }
            return acc[part];
        }, result);
    }
    return result;
}

const flatObject = { 'a.b.c': 1, 'a.d': 2, e: 3 };
console.log(unflattenObject(nestedObject));
// { a: { b: { c: 1 }, d: 2 }, e: 3 }




const flattenArray = (arr) => {
    return arr.reduce((acc, val) => {
        if (Array.isArray(val)) {
            return acc.concat(flattenArray(val));
        }
        return acc.concat(val)

    }, [])
}
console.log(flattenArray([1, 2, [[[3, 4, [[9]]]]]], 8));
