export default {
	async fetch(request, env) {
		const url = new URL(request.url);

		if (url.pathname !== "/health") {
			return new Response("Not found", { status: 404 });
		}

		await env.DB.prepare("SELECT 1").first();

		return Response.json({
			ok: true,
			database: "connected",
		});
	},
} satisfies ExportedHandler<Env>;
