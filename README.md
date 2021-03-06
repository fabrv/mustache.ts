## Mustache.ts
![badge](https://github.com/fabrv/mustache.ts/workflows/Tests/badge.svg)
  
A Typescript Deno-first refactoring of [mustache.js](https://github.com/janl/mustache.js).

## Usage
### Basic usage
```typescript
import { render } from 'https://deno.land/x/mustache_ts/mustache.ts';

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
import { renderFile } from 'https://deno.land/x/mustache_ts/mustache.ts';

const view = {
  title: 'Joe',
  calc: () => 2 + 4
}

const output = await renderFile('./template.html', view)
```
### With Alosaur

```typescript
import { renderFile } from 'https://deno.land/x/mustache_ts/mustache.ts';

app.useViewRender({
  type: 'mustache',
  basePath: `${Deno.cwd()}/views/`, // path to folder views
  getBody: (path: string, model: Object, config: ViewRenderConfig) =>
    renderFile(normalize(`${config.basePath}${path}.html`), model)
});
```

## Credits
- Author, Fabrizio Delcompare [@fabrv](https://github.com/fabrv)
- Tests and Github Workflow, Rustam [@irustm](https://github.com/irustm)
- Original project, [Mustache.js](https://github.com/janl/mustache.js)