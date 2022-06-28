import { paramCase } from 'change-case';
const prefix = `u`;
const parse = (inputs, includeName) => {
    const result = [];
    for (const input of inputs) {
        const type = Object.prototype.toString
            .call(input)
            .replace(/\[|\]|object| /g, '')
            .toLowerCase();
        switch (type) {
            case 'array': {
                console.log('TODO', input);
                break;
            }
            case 'object': {
                for (let key in input) {
                    const value = input[key];
                    key = paramCase(key);
                    if (typeof value == 'undefined' || value === false)
                        continue;
                    if (value === true)
                        key && result.push(key);
                    else if (typeof value == 'number' || includeName)
                        key && result.push(`${key}-${value}`);
                    else
                        result.push(value);
                }
                break;
            }
            case 'string': {
                input.split(' ').forEach((input) => result.push(input));
                break;
            }
        }
    }
    return result;
};
export const classname = (root, scoped, global, includeName) => {
    root = paramCase(root || '');
    scoped = [scoped].flat();
    global = [global].flat();
    const classes = parse(scoped, includeName)
        .map((input) => (root ? `${prefix}-${root}-${input}` : `${prefix}-${input}`))
        .concat(...parse(global))
        .filter((input) => input);
    if (root)
        classes.unshift(`${prefix}-${root}`);
    return classes.join(' ') || undefined;
};
