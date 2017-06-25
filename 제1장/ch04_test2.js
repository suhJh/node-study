process.on('exit', () => {
    console.log('exit event happens');
});

setTimeout(() => {
    console.log('2초 후에 시스템 종료 이벤트 시도함');
    process.exit();
}, 2000);