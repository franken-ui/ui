# Franken UI

Franken UI is an HTML-first, open-source library of UI components that works as a standalone or as a Tailwind CSS plugin. It is compatible with UIkit 3. The design is influenced by shadcn/ui. 

## Documentations

|               **Version**               |   **Status**   |
|:---------------------------------------:|:--------------:|
| [Version 2](https://franken-ui.dev)     | ⚡ Active       |
| [Version 1](https://uno.franken-ui.dev) | 💀 Discontinued |

## Shameless Self-Promotion

Really, inside a GitHub repo? What the heck, this is my project! Portfolio? [You're looking at it](https://franken-ui.dev). This may look like it’s run by an army of devs from a company with millions in VC backing, but trust me, it's just me, Llama 3.1, and Claude.AI running the entire show!

Speaking of which, this UI is now used by solo devs, small teams, a CEO who won’t just hire a designer, and heck, even companies with millions in funding. Don’t believe me? I can’t either!

If you need extra brain cells, I’ve got the skills: Laravel (preferred), Vanilla PHP, JS or TS, and every framework-of-the-month in between. Note that I know nothing about Rust, Python, or Go because I'm a real programmer, so please do not send me those offers.

### Availability:

I can squeeze in 20 hours a week, or go full-time if you have the budget. I look like I'm joking, but I’m dead serious. [Let me help you translate those ideas into a successful product](mailto:reden@franken-ui.dev)!

## Sponsors

Franken UI is an independent, MIT-licensed open source project with its ongoing development made possible entirely by the support of the community. If Franken UI has been beneficial to you in any way, please consider contributing by making a donation, which will help maintain and improve it for the benefit of everyone.

Thanks to the following:

<p align="center">
  <a target="_blank" href="https://franken-ui.dev/#sponsors">
    <img alt="Franken UI Sponsors" src="https://franken-ui.dev/images/sponsors/all.png" />
  </a>
</p>

And the amazing individuals from [Ko-Fi](https://ko-fi.com/sveltecult) who helped it since day one.

## Development

Code contributions are now accepted from the community. To ensure effective collaboration and minimize potential conflicts, contributors are requested to [reach out](mailto:reden@franken-ui.dev) before starting work on any new features or bug fixes. This allows discussion of proposed changes, guidance on project architecture and coding standards, and ensures all contributions align with the project's overall vision.

To get started with development, please follow these steps:

* Clone the following three repositories into a single directory: [franken-ui/ui](https://github.com/franken-ui/ui), [franken-ui/uikit](https://github.com/franken-ui/uikit), and [franken-ui/webc](https://github.com/franken-ui/webc).
* Navigate to the `uikit` directory and run the following commands:
  * `npm install`
  * `npm run compile-js`
  * `npm link`
* Next, navigate to the `ui` directory and run the following commands:
  * `npm install`
  * `npm run package`
  * `npm link`
* Finally, navigate to the `webc` directory and run the following commands:
  * `npm install`
  * `npm link franken-ui uikit`
  * `npm link`
* You are now ready to begin developing Franken UI.

## License

Licensed under the [MIT license](https://github.com/franken-ui/ui/blob/master/LICENSE.md).

## Testing

This project is tested with BrowserStack
