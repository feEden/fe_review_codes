// subworker执行开始
console.log('subworker执行开始...');

this.onmessage = (e) => {
    console.log(e.data);
}

console.log('subworker执行开始...');