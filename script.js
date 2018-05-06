function plusOne(num) {
    console.log('START');
    plusOrNot(num);
};

function plusOrNot(number) {
    console.log('loading...')
    return new Promise((resolve, reject) => {
        if(Math.random() > 0.1) {
            setTimeout(() => {
                number++;
                console.info('Number is ', number);
                resolve(number);
            }, 2000);
        } else {
            reject('Plus one stopped, number is equal ' + number);
        };
    });
};


plusOrNot(0)
    .catch(err => console.error(err));

