// Simulating async operations with setTimeout

function createPromise(time) {
    return new Promise(resolve => setTimeout(() => resolve(time), time));
  }
  
  const promises = [
    createPromise(1000), // 1 second
    createPromise(2000), // 2 seconds
    createPromise(3000), // 3 seconds
  ];
  
  // Sequential approach (bad for performance)
  async function resolveSequentially() {
    let results = [];
    for (let promise of promises) {
      results.push(await promise);
    }
    console.log("Sequential results:", results);  // Logs after ~6 seconds
  }
  
  resolveSequentially();
  
  // Parallel approach (using Promise.all)
  async function resolveInParallel() {
    let results = await Promise.all(promises);
    console.log("Parallel results:", results);  // Logs after ~3 seconds
  }
  
  resolveInParallel();
  