const ejs = require('ejs');

let getTemplate = async (fileName: string): Promise<string> => {
  try {
    return await ejs.renderFile(fileName, {
      json: {
        arr: [
          {name: 'a', age: 1},
          {name: 'b', age: 2},
          {name: 'c', age: 3}
        ]
      },
      type: 'main'
    })
  } catch (e) {
    console.log(e.message);
  }
}

(async () => {
  console.log(await getTemplate('main.ejs'));
})()

