import fs from 'fs/promises'
import mustache from 'mustache'

/**
 * Render template from a template file
 *
 * @param templatePath - Path of the template file
 * @param view - The view to render the template with
 */
export async function renderTemplate(templatePath: string, view: Record<string, any> = {}) {
	const template = await fs.readFile(templatePath)

	return mustache.render(template.toString(), view)
}
