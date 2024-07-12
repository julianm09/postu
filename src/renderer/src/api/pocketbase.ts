import PocketBase from 'pocketbase'

const url = 'https://postu.pockethost.io/'
export const pb = new PocketBase(url)

export const records = await pb.collection('posts').getFullList({
  sort: '-created'
})
