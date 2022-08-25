import jokes from './jokes.json'

/** NOTE: The `async` is required. Do not delete it.* */
export const handler = async () => {
  const randomIndex = Math.floor(Math.random() * jokes.length)
  const randomJoke = jokes[randomIndex]
  return {
    statusCode: 200,
    body: randomJoke,
  }
}
