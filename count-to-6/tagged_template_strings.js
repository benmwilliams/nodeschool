console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`)

function html(string, ...args) {
	var str = string[0]
	for (var i = 0; i < args.length; i++) {
		str = str + esc(args[i]) + string[i + 1]
	}
	return str
}

function esc(text) {
	return text
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;')
}
