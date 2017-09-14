export const env = 'PRODUCTION';
export function sumNumbers(a, b) {
    return a + b;
}

//  2nd way of exporting
const env2 = 'PRODUCTION';
function sumNumbers2(a, b) {
    return a + b;
}
export {env2, sumNumbers2};
