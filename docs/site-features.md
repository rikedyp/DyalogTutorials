# Site features
This site uses [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/). Their documentation is excellent and will help you to understand how to write content for this site in general, but there are a few specific features of this particular site worth knowing about.

## Try it now! links
Some code examples and Jupyter notebooks shown on this site can run on TryAPL. This site has a class `apl-example-title` which places a *Try it now!* link to the right-hand side of some text.

**Example:**

<div style="display:flex; justify-content:space-between;" class="apl-example-title">
	<p>Estimate Pi with 10,000 pairs of random numbers:</p>
	<p><a href="https://tryapl.org/?clear&q=%7B4%C3%97(%2B%E2%8C%BF%C3%B7%E2%89%A2)1%3E0.5*%E2%8D%A8%2B%2F2*%E2%8D%A8%3F%E2%8D%B5%202%E2%8D%B40%200%7D10000&run">Try it now!</a></p>
</div>

```APL
      {4×(+⌿÷≢)1>0.5*⍨+/2*⍨?⍵ 2⍴0 0}10000
3.1456
```

## Jupyter notebooks
This site uses the [mkdocs-jupyter](https://github.com/danielfrg/mkdocs-jupyter) plugin to render Dyalog jupyter notebooks inside the site, rather than linking to an external renderer such as [nbviewer](https://nbviewer.org/).

The notebooks are integrated from the :fontawesome-brands-github: [Dyalog/dyalog-jupyter-notebooks](https://github.com/dyalog/dyalog-jupyter-notebooks) repository using a Git submodule. In this way, anybody can contribute notebooks to our overall collection. Notebooks are automatically accessible using the Git submodule, but notebooks must be explicitly included in the `mkdocs.yml` configuration in order to be included on this site.
