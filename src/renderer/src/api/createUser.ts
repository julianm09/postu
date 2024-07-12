import { pb } from './pocketbase'

export const createUser = async (
  email: string,
  username: string,
  password: string,
  passwordConfirm: string
) => {
  try {
    const user = await pb.collection('users').create({
      email: email,
      username: username,
      password: password,
      passwordConfirm: passwordConfirm,
      membership: 'basic'
    })
    return user
  } catch (error) {
    throw error
  }
}
