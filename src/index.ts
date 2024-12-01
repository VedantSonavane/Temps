import { Hono } from 'hono'

const app = new Hono()
let readingTime=238;

function calculatereadingTime(sentence: string, wpm: number) {
  const wordscount = sentence.split(/\s+/).length
  const minutes = wordscount / wpm
  const seconds = minutes * 60
  return {wordscount, minutes, seconds,wpm}
}
let testStr = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptatum incidunt nemo minus dicta ratione a nam voluptatem maxime, deleniti necessitatibus provident porro quibusdam, veniam atque qui. Quas architecto culpa, perferendis beatae officia dicta aliquid veritatis voluptatibus, est modi incidunt doloribus vel sunt exercitationem ab odio. Natus velit ipsum sed similique numquam, eum officiis asperiores nesciunt quibusdam eveniet eaque amet voluptatum repellendus consequatur omnis debitis odit neque iusto minus possimus nostrum vel. Doloribus voluptatum enim vel eum nesciunt consectetur, deserunt aspernatur labore odio at! Reiciendis soluta voluptatibus veritatis est qui, exercitationem rerum sed quaerat, inventore neque tenetur enim debitis quo voluptas consequatur explicabo. Ea eius ad sed provident, exercitationem fugiat nulla distinctio voluptate eligendi perspiciatis ipsum quidem illum voluptates labore quibusdam rem! Modi dignissimos distinctio voluptatem in officia natus aliquam voluptates praesentium magni quo totam aliquid dolor obcaecati enim quae repudiandae consequuntur recusandae earum omnis quisquam sunt consequatur, a nisi adipisci? Laboriosam, culpa nihil ipsa optio eaque eveniet pariatur at repudiandae sint ex laudantium id assumenda illo nostrum nobis dolorum corrupti nulla enim amet eius. Reiciendis, veniam. Quo, voluptatibus, doloremque veritatis a placeat incidunt nam eaque unde quaerat iusto debitis delectus error explicabo earum nisi sint cum harum architecto vero. Maxime autem quaerat culpa voluptas minima tempora hic est quidem repellendus praesentium? Placeat consequuntur suscipit cupiditate voluptate excepturi deleniti amet? Nemo, distinctio deleniti corporis voluptas provident dolorem aliquid, dolores at officiis, aspernatur eos pariatur porro repudiandae laborum necessitatibus!";

const x = calculatereadingTime(testStr, readingTime);
console.log(x);

app.get('/', (c) => {
 const sentence = c.req.query("sentence")
 const wpm = c.req.query("wpm")

 if (!sentence) {
   return c.text('Please provide a sentence', 400)
 }

 if (!wpm) {
   return c.text('Please provide a wpm')
 }

 console.log(sentence);
 return c.json({
   sentence,
   wpm,
 })
})

export default app
