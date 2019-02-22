//Write a single ES6 expression to take `'a=4,b=15,c=42'` and convert it into an object.

'a=4,b=15,c=42'.split(',').map(i => i.split('=')).reduce((pv,cv) => ({...pv, [cv[0]]:cv[1]}),{})