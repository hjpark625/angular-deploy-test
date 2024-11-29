const { writeFileSync } = require('fs')
const { resolve } = require('path')
const dotenv = require('dotenv')

const envFile = './.env'
const fullEnvPath = resolve(__dirname, envFile)

dotenv.config({ path: fullEnvPath, encoding: 'utf8', debug: true })

const prodEnv = './src/environments/environment.ts'
const devEnv = './src/environments/environment.development.ts'

const prodEnvPath = resolve(__dirname, prodEnv)
const devEnvPath = resolve(__dirname, devEnv)

// const envPath =
//   process.env['NODE_ENV'] === 'production'
//     ? './src/environments/environment.ts'
//     : './src/environments/environment.development.ts'

// const targetPath = resolve(__dirname, envPath)

const envConfigFile = `export const environment = {
  production: '${process.env['NODE_ENV'] === 'production'}',
  testValue: '${process.env['testValue']}'
}
`

// writeFileSync(targetPath, envConfigFile)
writeFileSync(prodEnvPath, envConfigFile)

writeFileSync(devEnvPath, envConfigFile)

console.log(`<=======env start=======>`)
console.log(envConfigFile)
console.log(`<=======env end=======>`)
console.log(`Environment Variables written to ${prodEnvPath} and ${devEnvPath}`)
