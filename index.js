import { URL } from 'node:url'

const scrambledUrl = process.argv[2]
const { host, searchParams } = new URL(scrambledUrl)

if (host === 'mandrillapp.com') {
  const base64 = searchParams.get('p')
  const plaintext = Buffer.from(base64, 'base64').toString('utf-8')
  const { p } = JSON.parse(plaintext)
  const data = JSON.parse(p)
  console.log(`\n\n${data.url}`)
}
