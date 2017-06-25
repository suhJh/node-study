process.on('tick', (arg) => {
   console.log('tick ev: ', arg) ;
});

setTimeout(() => {
    console.log('2초 지남');
    process.emit('tick', '2');
    console.log('emit했다.');
}, 2000);