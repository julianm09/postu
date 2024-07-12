import { pb } from './pocketbase'

export const getAuthData = async (username, password) => {
  const auth = await pb.collection('users').authWithPassword(username, password)
  return auth
}
