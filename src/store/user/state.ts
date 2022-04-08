
export interface UserStateInterface {
  user: {
    id: number,
    email: string,
    name: string
  } | null
}

function state(): UserStateInterface {
  return {
    user: null
  }
}

export default state
