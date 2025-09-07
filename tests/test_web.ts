import test from "node:test";
import { fetchArticle } from "../src/puppeteer_crawler_agent";

test("test", async () => {
  const res = await fetchArticle("https://www.fnn.jp/articles/-/927840");
  console.log(res);
});
