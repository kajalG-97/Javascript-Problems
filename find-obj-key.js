const nestedObject = {
    level1: {
        level2: {
            level3: {
                d: {
                    targetKey: "Found me!",
                },
            },
        },
        anotherKey: "Just a distraction",
    },
};

function findKey(obj, keyToFind) {
    for (let key in obj) {
        if (key === keyToFind) {
            return obj[key];
        }
        if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
            const result = findKey(obj[key], keyToFind);
            if (result) return result;
        }
    }
    return;
}

function findKeyOfValue(obj, value) {
    for (var key in obj) {
        if (obj[key] === value) return key;
        if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
            const res = findKeyOfValue(obj[key], value);
            if (res) return res;
        }
    }
    return;
}

function findDeepestObject(obj, currentDepth = 0, deepest = { depth: -1, object: null }) {
    if (obj === null || typeof obj !== "object") {
        return deepest;
    }

    let updatedDeepest = { ...deepest };

    if (currentDepth > deepest.depth) {
        updatedDeepest = { depth: currentDepth, object: obj };
    }

    for (const value of Object.values(obj)) {
        if (typeof value === "object" && value !== null) {
            updatedDeepest = findDeepestObject(value, currentDepth + 1, updatedDeepest);
        }
    }

    return updatedDeepest;
}

function findDeepestKey(obj, currentDepth = 0, deepest = { depth: -1, key: null }) {
    if (obj === null || typeof obj !== "object") {
        return deepest;
    }

    let updatedDeepest = { ...deepest };

    // Check each key-value pair in the object
    for (const [key, value] of Object.entries(obj)) {
        if (typeof value === "object" && value !== null) {
            // Recursive call to dive deeper
            updatedDeepest = findDeepestKey(value, currentDepth + 1, updatedDeepest);
        } else if (currentDepth > deepest.depth) {
            // Update if we find a deeper object
            updatedDeepest = { depth: currentDepth, key };
        }
    }

    return updatedDeepest;
}
// Usage:
const result = findDeepestObject(nestedObject);
console.log("Deepest Object:", result.object);
console.log("Depth:", result.depth);
console.log(findKeyOfValue(nestedObject, "Value in level3"));

console.log(findKey(nestedObject, "anotherKey"));