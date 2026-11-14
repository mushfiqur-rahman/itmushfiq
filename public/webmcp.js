// Progressive enhancement: regular browsers do not yet expose WebMCP.
(() => {
  if (!navigator.modelContext?.registerTool) return;
  navigator.modelContext.registerTool({
    name: 'get_service_guide',
    description: 'Read IT Support Bee services, common questions, and contact links. Does not submit a request or book a service.',
    inputSchema: { type: 'object', properties: {}, additionalProperties: false },
    annotations: { readOnlyHint: true },
    async execute() {
      const response = await fetch('/index.md');
      if (!response.ok) throw new Error('The service guide is temporarily unavailable.');
      return { content: [{ type: 'text', text: await response.text() }] };
    },
  });
})();
