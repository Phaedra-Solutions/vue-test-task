import axios from 'axios'
import { Child, User } from 'src/components/models'

export default class ApiService {
  /**
   * Get Children form mock data
   * @param parentId
   * @returns
   */
  static async getChildren(parentId: number) {
    const { data } = await axios.get('/data/children.json')

    if (data && data.length) {
      return data.filter((x: Child) => x.parent === parentId)
    } else {
      return data
    }
  }

  /**
   * Get Classes with mock data
   * @returns
   */
  static async getClasses() {
    const { data } = await axios.get('/data/classes.json')

    return data
  }

  /**
   * Login with Mock data
   * @param email
   * @param password
   * @returns
   */
  static async login(email: string, password: string) {
    const { data } = await axios.get('/data/user.json')

    if (data && data.length) {
      const user = data.find((user: User) => user.email === email && user.password === password)
      return user
    } else {
      return null
    }
  }
}
