const getPrototypeOf = Object.getPrototypeOf;
const objectProto = Object.prototype;

function extend() {
    var options, name, src, copy, copyIsArray, clone;
    var target = arguments[0] || {};
    var i = 1;
    var length = arguments.length;
    var deep = false;

    if (typeof target === 'boolean') {
        deep = target;
        target = arguments[i] || {};
        i++;
    }
    if (typeof target !== 'object' && !isFunction(target)) {
        target = {};
    }
    for (; i < length; i++) {
        if ((options = arguments[i]) !== null) {
            for (name in options) {
                src = target[name];
                copy = options[name];

                // prevent never-ending loop
                if (target === copy) {
                    continue;
                }
                // recurse if we're merging plain objects or arrays
                if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
                    if (copyIsArray) {
                        copyIsArray = false;
                        clone = src && isArray(src) ? src : [];
                    } else {
                        clone = src && isPlainObject(src) ? src : {};
                    }
                    // never move original objects, clone them
                    target[name] = extend(deep, clone, copy);
                } else {
                    target[name] = copy;
                }
            }
        }
    }
    return target;
}


function isFunction(obj) {
    return typeof obj === 'function' && obj;
}

function isPlainObject(obj) {
    var proto = typeof obj === 'object' && obj !== null && getPrototypeOf(obj);
    return (proto === objectProto || proto === null) && obj;
}

function isArray(obj) {
    return Array.isArray(obj) && obj;
}



export {extend};