import axios from 'axios';

class APIGetter {
  async getColumn(id: string) : Promise<any> {
    const url = `https://zhuanlan.zhihu.com/api/columns/${id}`;
    const response = await axios(url)
    return await response.data
  }
}

interface col {
  name: string 
  intro: string
}

(async () => {
  const client = new APIGetter();
  const column = await client.getColumn('vczatan');
  console.log(`NAME: ${column.name}`);
  console.log(`INTRO: ${column.intro}`);
})()

