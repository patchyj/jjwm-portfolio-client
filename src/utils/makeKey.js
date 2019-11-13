export default (arg, index) => `${arg.trim().replace(/\s/g, '_')}__${index}`;
