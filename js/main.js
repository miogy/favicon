console.log('welcome');


// 비동기 함수

async function test(){
    const promist = Pomise.resolve(123);
    console.log(await promist);
}

test();