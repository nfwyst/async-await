import axios from 'axios';

async function getZhihuColumn(id: string) : Promise<any> {
  const url = `https://zhuanlan.zhihu.com/api/columns/${id}`;
  const response = await axios(url)
  return await response.data
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
