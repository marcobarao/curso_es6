const minhaPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("OK");
    }, 2000);
  });

//   async function executaPromise() {}
const executaPromise = async () => {
  console.log(await minhaPromise());
  console.log(await minhaPromise());
  console.log(await minhaPromise());
};

executaPromise();
