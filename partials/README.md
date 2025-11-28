# Partials

This package provides partials for the Porsche Design System which can be used to integrate fallback scripts for browser
support and cookies.

## Browser Support Fallback Script

**Function name:** `getBrowserSupportFallbackScript()`

The Porsche Design System components rely on dedicated JavaScript features like `IntersectionObserver`,
`MutationObserver`, `customElements` and others. If any of the requirements are not met, a blocking overlay is displayed
which recommends the user to update the browser.

Therefore, we provide a ready to use partial in the `@porsche-design-system/fallbacks` package
which needs to be injected before the closing `</body>` of your `index.html`.

### Supported options

| Option   | Description                                                                                                                                                                                                                                                                  | Type                          | Default  |
|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------|----------|
| `cdn`    | Decides from which CDN the resources are loaded.                                                                                                                                                                                                                             | `'auto' \| 'cn'`              | `'auto'` |
| `format` | Defines the output format of the partial. By default, it returns a html string. <br/> For `jsx` it returns a jsx element. For `sha256` it returns a SHA-256 hash of the innerHTML to use in a [Content Security Policy (CSP)](/must-know/security/content-security-policy/). | `'html' \| 'jsx' \| 'sha256'` | `'html'` |

When using `jsx` in the `format` option, it is necessary to have `react/jsx-runtime` as a dependency in the project
included.

## Cookies Fallback Script

**Function name:** `getCookiesFallbackScript()`

Although the Porsche Design System does not rely on browser cookies, a blocking overlay is shown asking the user to
activate browser cookies in case those are disabled completely.

Therefore, we provide a ready to use partial in all `@porsche-design-system/components-{js|angular|react|vue}` packages
which needs to be injected before the closing `</body>` of your `index.html`.

### Supported options

| Option   | Description                                                                                                                                                                                                                                                            | Type                          | Default  |
|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------|----------|
| `cdn`    | Decides from which CDN the resources are loaded.                                                                                                                                                                                                                       | `'auto' \| 'cn'`              | `'auto'` |
| `format` | Defines the output format of the partial. By default, it returns a html string. For `jsx` it returns a jsx element. For `sha256` it returns a SHA-256 hash of the innerHTML to use in a [Content Security Policy (CSP)](/must-know/security/content-security-policy/). | `'html' \| 'jsx' \| 'sha256'` | `'html'` |

When using `jsx` in the `format` option, it is necessary to have `react/jsx-runtime` as a dependency in the project
included.

## Translations

Automatic translations for the following languages are provided:
`'de' | 'ru' | 'fr' | 'en' | 'it' | 'pt' | 'es' | 'ja' | 'ko' | 'zh' | 'nl' | 'pl' | 'cs' | 'da' | 'et' | 'fi' | 'lt' | 'lv' | 'no' | 'sl' | 'sv' | 'tr' | 'uk'`

As soon as the **Cookies Fallback** or the **Browser Support Fallback** script initializes, it looks for the obligatory
`lang` attribute defined in the
`html` tag. Support is given for the following formats, e.g.:

- `lang="en"`
- `lang="en_US"`
- `lang="en-US"`

If none of these languages can be found, it will fall back to `en`.

## Troubleshooting

There always might be a case where something goes wrong. Here are some possible answers:

1. **Q:** Why does the translation not get recognized automatically? **A:** Mostly this is a result of false order of
   script loading and setting translation key by the application. It's required that the `lang` attribute in the `html`
   tag is defined with the correct value **before** the **Cookies Fallback** or the **Browser Support Fallback** script
   gets initialized. **A:** The
   translation key is not part of the provided keys (see "Translations") **A:** The translation key has not the correct
   format (see "Translations")
2. **Q:** Why are there no implementation guidelines for my JS framework? **A:** Implementing a third party script can
   be done in many ways regarding the setup of your application. So there isn't a solely true way to integrate it in a
   specific framework. Just one rule of thumb: **It should be initialized as late as possible.**