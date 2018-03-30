const path = require('path')
const fs = require('fs')

const filePath = path.resolve(__dirname, 'package.json')
const extractDependencies = (targetPath) => {
	try {
		const {
			dependencies, devDependencies, peerDependencies
		} = JSON.parse(fs.readFileSync(filePath, {
			encoding: 'utf8'
		}))

		return {
			dependencies, devDependencies, peerDependencies
		}
	} catch (err) {
		throw new Error(err)
	}
}

module.exports = extractDependencies