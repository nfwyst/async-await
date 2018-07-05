const axios = require('axios');

async function getZhihuColumn(id: string) : Promise<any> {
  const url = `https://zhuanlan.zhihu.com/api/columns/${id}`;
  const response = await axios(url)
  const data = await response.data

  return data
}

interface col {
  name: string 
  intro: string
}

getZhihuColumn('vczatan')
  .then((column: col) => {
    console.log(`NAME: ${column.name}`);
    console.log(`INTRO: ${column.intro}`);
  })
