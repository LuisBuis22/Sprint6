import bcryptjs from 'bcryptjs'
export default class Encrypt {
  static async encryptPassword(pass: string) {
      
      const salt = await bcryptjs.genSalt(10);
      return await bcryptjs.hash(pass, salt);
    }
    static async comparePassword(pass: string, received: string) {
      
    const salt = await bcryptjs.genSalt(10);
    return await bcryptjs.compare(pass, received)
  }
}
