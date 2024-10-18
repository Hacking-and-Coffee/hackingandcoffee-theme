# Hacking and Coffee Theme

The Hacking and Coffee Theme is a custom theme for Hugo, designed to work seamlessly with Tailwind CSS. This theme provides a modern and responsive design.

## Features

- **Responsive Design**: Adapts to different screen sizes for a seamless user experience on any device.
- **Tailwind CSS**: Utilizes Tailwind CSS for easy customization and styling.
- **Customizable Layouts**: Offers a variety of layouts and components to suit your content needs.
- **SEO Optimized**: Built with best practices for search engine optimization.
- **Fast Performance**: Optimized for speed and efficiency.

## Installation

To install the Hacking and Coffee Theme, add it as a submodule to your Hugo site:

```bash
git submodule add https://github.com/0xDezzy/hackingandcoffee-theme themes/hackingandcoffee
```

Then, update your site's configuration to use the theme:

```yaml
# config.yaml
theme: hackingandcoffee
```

## Configuration

The theme can be customized through the Hugo configuration files. Here are some common configuration options:

- **Site Parameters**: Customize site-wide parameters such as title, description, and social media links in `config/_default/params.yaml`.
- **Menu Configuration**: Define your site's navigation menu in `config/_default/menu.yaml`.
- **Custom CSS**: Add custom styles by extending Tailwind CSS in your site's `assets/css` directory.

## Development

Since the theme relies on Tailwind CSS, ensure that your development environment is set up to process Tailwind CSS. This is typically managed in the main site's `package.json` and development scripts.

### Tailwind CSS

Tailwind CSS is configured in the main site's `package.json`. Ensure you have the necessary npm scripts to build and watch for changes:

```json
{
    "scripts": {
    "build:css": "npx tailwindcss -i ./themes/hackingandcoffee/assets/css/main.css -o ./themes/hackingandcoffee/assets/css/styles.css --minify",
    "watch:css": "npx tailwindcss -i ./themes/hackingandcoffee/assets/css/main.css -o ./themes/hackingandcoffee/assets/css/styles.css --watch",
    "format": "prettier --write \"**/*.{js,jsx,ts,tsx,css,scss,html,md,yml,yaml,json}\"",
    "hugo:server": "hugo server",
    "hugo:build": "hugo --minify",
    "dev": "npm-run-all --parallel watch:css hugo:server",
    "build": "npm-run-all build:css hugo:build"
  },
}
```

## Additional Information

- **Hugo Documentation**: [https://gohugo.io/documentation/](https://gohugo.io/documentation/)
- **Tailwind CSS Documentation**: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)

For any questions or contributions, feel free to open an issue or submit a pull request.
