function createPromise(val:number | string){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(val);
    },1000)
  })
}

async function test(){
  let p1 = createPromise(111);
  let p2 = createPromise(222);
  let p3 = createPromise(333);

  const list = [p1,p2,p3];

  for await (let val of list){
    console.log(val);
  }
}

test();