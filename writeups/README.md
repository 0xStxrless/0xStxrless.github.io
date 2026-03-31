# writeup system

clean, unified design for all writeups. easy to add new ones.

## adding a new writeup

1. copy `TEMPLATE.html` to a new file (e.g., `my-writeup.html`)
2. update the title, meta tags, and content
3. add an entry to `index.html` in the main directory

## available tag classes

use these in the `post-eyebrow` section:

- `tag-ctf` - blue (CTF challenges)
- `tag-web` - green (web exploitation)
- `tag-pwn` - purple (pwn/binary)
- `tag-rev` - yellow (reverse engineering)
- `tag-crypto` - red (cryptography)
- `tag-bug` - orange (bug bounty)
- `tag-misc` - grey (miscellaneous)

## content elements

### headings

```html
<h2>main section</h2>
<h3>subsection</h3>
```

### code

```html
<!-- inline -->
<code>command</code>

<!-- block with filename -->
<pre data-file="script.py"><code>code here</code></pre>

<!-- block without filename -->
<pre><code>command output</code></pre>
```

### callouts

```html
<!-- info -->
<blockquote>
  <p>information</p>
</blockquote>

<!-- warning -->
<blockquote class="warn">
  <p>warning text</p>
</blockquote>

<!-- success -->
<blockquote class="ok">
  <p>success text</p>
</blockquote>
```

### lists

```html
<!-- unordered -->
<ul>
  <li>item with <strong>bold</strong></li>
  <li>another item</li>
</ul>

<!-- ordered -->
<ol>
  <li>step one</li>
  <li>step two</li>
</ol>
```

### tables

```html
<table>
  <thead>
    <tr><th>header 1</th><th>header 2</th></tr>
  </thead>
  <tbody>
    <tr><td>data 1</td><td>data 2</td></tr>
  </tbody>
</table>
```

### flags

```html
<div class="flag">
  <span class="flag-label">user</span>
  <span class="flag-value">flag_here</span>
</div>
```

## style notes

- keep it simple and readable
- use consistent spacing
- tags are auto-colored based on class
- star animation is automatic
- mobile responsive out of the box
