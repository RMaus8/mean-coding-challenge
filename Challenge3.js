// Write a function `serialPromise()` that will execute promises in series.

// Example promise function:
// ```js
function delayPromise(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('delayPromise(%d) done', ms);
            resolve(2*ms);
        }, ms);
    });
}
// ```
// I should be able to run:

// ```js
// console.time('serialPromise')
// serialPromise(delayPromise, [100,200,700,1000]).then(() => console.timeEnd('serialPromise'));
// // ```
// Resulting in something like:
// ```
// delayPromise(100) done
// delayPromise(200) done
// delayPromise(700) done
// delayPromise(1000) done
// serialPromise: 2002.3681640625ms
// ```

// ### Bonus
// Have `serialPromise()` resolve to an array of the individual promise resolutions:

// ```js
// serialPromise(delayPromise, [100,500,100,600]).then(console.log);
// ```

// Would result in:
// ```js
// [200, 1000, 200, 1200]
// ```

// Because of the `resolve(2*ms)` in the `delayPromise()` function.

function serialPromise(func, arr) {
    return arr.reduce((prom, cv) => {
        return prom.then(results => func(cv).then(newRes => [...results, newRes]))
    }, Promise.resolve([])).then(val => val)
}


