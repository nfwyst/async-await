import axios from 'axios';

const sleep: (timeout: number) => Promise<any> = (timeout: number = 2000) => new Promise((resolve: any, reject: any) => {
  setTimeout(resolve, timeout);
});

class APIGetter {
  async getColumn(id: string) : Promise<any> {
    await sleep(2000)
    const url = `https://zhuanlan.zhihu.com/api/columns/${id}`;
    const response = await axios(url)
    return await response.data;
  }
}


interface col {
  name: string 
  intro: string
}

(async () => {
  const client = new APIGetter();
  const Promise1 = client.getColumn('vczatan');
  const Promise2 = client.getColumn('toolingtips');
  try {
    const column1 = await Promise1;
    console.log(`NAME: ${column1.name}`);
    console.log(`INTRO: ${column1.intro}`);
  } catch (e) {
    console.error(e.message);
  }

  try {
    const column2 = await Promise2;
    console.log(`NAME: ${column2.name}`);
    console.log(`INTRO: ${column2.intro}`);
  } catch (e) {
    console.error(e.message);
  }
})()

