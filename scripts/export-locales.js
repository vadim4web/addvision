import fs from 'fs'
import path from 'path'
import { fileURLToPath, pathToFileURL } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const inputDir = path.join(__dirname, '../i18n/locales')
const outputDir = inputDir

const locales = ['uk', 'ru', 'en']

for (const locale of locales) {
	const jsFilePath = path.join(inputDir, `${locale}.js`)
	const fileUrl = pathToFileURL(jsFilePath) // ✅ converts to file:// URL
	const module = await import(fileUrl)
	const data = module.default

	const outPath = path.join(outputDir, `${locale}.json`)
	fs.writeFileSync(outPath, JSON.stringify(data, null, 2), 'utf-8')
	console.log(`✅ Converted ${locale}.js → ${locale}.json`)
}
