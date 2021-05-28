import {renderTemplate} from './utils'

(
	async () => {
		console.log('__dirname =', __dirname)

		const render = await renderTemplate(`${__dirname as string}/templates/test.mustache`, {hello: 'Hello World'})
		console.log('render =', render)
	}
)()
	.then(() => console.log('OK'))
	.catch(console.log)
