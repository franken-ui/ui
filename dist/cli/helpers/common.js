import uniq from 'lodash/uniq.js';
export function parseArgs(args, safelist, map) {
    const result = [];
    const invalidCommands = [];
    args.forEach((arg) => {
        if (/^-[^-]/.test(arg)) {
            for (let i = 1; i < arg.length; i++) {
                const char = arg[i];
                const mappedArg = map[char];
                if (mappedArg && safelist.includes(mappedArg)) {
                    result.push(mappedArg);
                }
                else {
                    invalidCommands.push(`-${char}`);
                }
            }
        }
        else if (safelist.includes(arg)) {
            result.push(arg);
        }
        else {
            invalidCommands.push(arg);
        }
    });
    if (invalidCommands.length > 0) {
        console.error(`Invalid command ${invalidCommands.join(' ')}`);
        process.exit(1);
    }
    return uniq(result);
}
