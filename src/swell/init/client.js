import swell from 'swell-js'

const options = {
    useCamelCase: false
}

swell.init(process.env.SWELL_STORE_ID, process.env.SWELL_PUBLIC_KEY, options)

export { swell };