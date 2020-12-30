## Mustache.ts
A Typescript Deno-first refactoring of [mustache.js@4.1.0](https://github.com/janl/mustache.js).

## Usage
### Basic usage
```typescript
import { render } from './mustache.ts';

const template = '{{title}} spends {{calc}}'
const view = {
  title: 'Joe',
  calc: () => 2 + 4
}

const output = render(template, view)
```

### Render file
```html
<b>{{title}}</b> spends <i>{{calc}}</i>
```
```typescript
import { renderFile } from './mustache.ts';

const view = {
  title: 'Joe',
  calc: () => 2 + 4
}

const output = await renderFile('./template.html', view)
```
### With Alosaur

```typescript
import { renderFile } from './mustache.ts';

app.useViewRender({
  type: 'mustache',
  basePath: `${Deno.cwd()}/views/`, // path to folder views
  getBody: (path: string, model: Object, config: ViewRenderConfig) =>
    renderFile(normalize(`${config.basePath}${path}.html`), model)
});
```

