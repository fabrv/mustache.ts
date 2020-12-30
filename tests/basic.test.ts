import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { render, renderFile } from '../mustache.ts';
const { test } = Deno;

test({
    name: 'Basic file rendering test',
    async fn() {
        const text = await renderFile(`${Deno.cwd()}/tests/index.html`, { title: 'Alosaur', calc: 5 });
        assertEquals('Alosaur spends 5', text);
    },
});

test({
    name: 'Basic string rendering test',
    fn() {
        const text = render('{{title}} spends {{calc}}', { title: 'Alosaur', calc: 5 })
        assertEquals('Alosaur spends 5', text);
    }
})
