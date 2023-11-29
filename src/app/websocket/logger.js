import fs from 'fs'
import path from 'path'

export class Logger {
  name = null

  constructor(name) {
    this.name = name
  }

  log(key, ...values) {
    console.log(key, ...values)

    fs.writeFileSync(
      path.resolve(process.env.DATA_PATH, Date.now().toString() + '.json'),
      JSON.stringify({ key, values }, null, 4).toString(),
    )
  }

  error(err = new Error()) {
    fs.writeFileSync(
      path.resolve(process.env.DATA_PATH, Date.now().toString() + '.error.json'),
      JSON.stringify(err, null, 4).toString(),
    )
  }

}
