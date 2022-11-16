import React from 'react'
import { LogInMutation } from '../../GraphQl/User/Mutations/Auth-Mutations/LogInMutation'
import { UpdatePostMutation } from '../../GraphQl/User/Mutations/Post-Mutations/updatePostMutation'
import { CreateUserMutation } from '../../GraphQl/User/Mutations/User-Mutations/CreateUserMutation'

export default function Login() {
  const { loginMutation, data } = LogInMutation()
  const { createUserMutation, data1 } = CreateUserMutation()
  const { updatePostMutation, data2 } = UpdatePostMutation()
  const login = (e) => {
    loginMutation({
      variables: { user: { password: 'some1', username: 'some1' } },
    })
  }
  const fileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const data = new FormData()
    const file = e.target.files![0]
    data.append('file', file)
    console.log(process.env.REACT_APP_GRAPHQL_SERVER_URL)
    const result = fetch(
      `http://localhost:5000/comment/delete/comment_video/4787087557_c1854bfe0f_z.jpg`,
      {
        credentials: 'include',
        method: 'DELETE',
        body: data,
      }
    ).then((result) => console.log(result))
  }

  const updatePost = (e) => {
    updatePostMutation({
      variables: { updateData: { text: 'blbla', postId: 2 } },
    })
  }
  const createUser = () => {
    createUserMutation({
      variables: {
        user: {
          password: 'some1',
          username: 'some1',
          email: 'some1@gmail.com',
        },
      },
    })
  }
  return (
    <div>
      <button onClick={updatePost}>updatePost</button>
      <button onClick={login}>Login</button>
      <button onClick={createUser}>Create User</button>
      <input required type="file" onChange={fileUpload}></input>
    </div>
  )
}
