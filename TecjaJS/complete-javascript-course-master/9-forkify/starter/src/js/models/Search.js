import axios from 'axios';
export default class Search {
  constructor(query) {
    this.query = query;
  }
  async getResults() {
    const proxy = `https://cors-anywhere.herokuapp.com/`
    const key = '888075b3bdac6673ad3269090546a9ca'
    try {
      const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`);
      this.result = res.data.recipes;
      // console.log(this.result);
    } catch (err) {
      alert(err);
    }
  }
};