# Notification Content

### What is Notification Content?

Notification Feeds have the ability to display customized content. By adopting and standardizing the notification content markdown, it ensures that we can keep on advancing the ways notification are presented on the frontend / UI..

:::info
Notification Content Markdown only works for the payload that transforms inside the user feed. specifically for the title and body. If this sounds unfamiliar, please read [Notification Standard Basics](../notification-standard-basics.md "mention")
:::

### Specifications

| Previous Markdown  | Cuurrent Markdown                                                                                  | Use Case         | Styling effects               |
| ------------------ | -------------------------------------------------------------------------------------------------- | ---------------- | ----------------------------- |
| \[b: textcontent]  | \*\***Bold**\*\*                                                                                   | For Emphasis     | For Bold                      |
| \[i: textcontent]  | \*_Italic_\*                                                                                       | For Emphasis     | For Italics                   |
| \[bi: textcontent] | \*\*\*Bold&Italics\*\*\*                                                                          | For Emphasis     | For Bold and Italics          |
|                    |                                                                                                    | For Segregation  | For new line                  |
| \[w: textcontent]  | `<PUSHText color="white">Hello World</PUSHText>`                                                  | For colored text | For white color               |
|                    | `<PUSHText color="#ANYHEXCODE"> Hello world </PUSHText>`                                           | For colored text | Supports any color by hexcode |
| \[d: textcontent]  | `<PUSHText color="primary">Hello World </PUSHText>`                                                | For colored text | Push Primary colored Text     |
| \[s: textcontent]  | `<PUSHText color="secondary">Hello World </PUSHText>`                                              | For colored text | Push Secondary colored Text   |
| \[t: textcontent]  | `<PUSHText color="tertiary">Hello World </PUSHText>`                                               | For colored text | Push Tetiary colored Text     |
| \[u: textcontent]  | `<PUSHText color="green" link="[https://www.epns.io">](broken-reference) EPNS website </PUSHText>` | For URL’s        | Underlined, Red Colored Text  |

### Reference Implementation -

> Note : We strongly recommend to use new current markdown structure, for the backward compatibility we still have previous markdown, these are intended to get deprecated in future.

* **For Bold** -

```
> Use case - For Emphasis
> Current Markdown -  **Bold**
> Backward compatibility - [b: textcontent] 
> Implementation -  **PUSH IMPROVEMENT PROPOSAL**
```

* **For Italics** -

```
> Use case - For Emphasis
> Current Markdown -  *Italics*
> Backward compatibility - [i: textcontent] 
> Implementation -  *Slant text*
```

* **For Bold and Italics** -

```
> Use case - For Emphasis
> Current Markdown -  ***Bold&Italics***
> Backward compatibility - [bi: textcontent] 
> Implementation -  ***Push guidelines***
```

* **For new Line** -

```
> Use case - 	For Segregation
> Current Markdown -  \n
> Backward compatibility - \n 
> Implementation -  Sub category of Notification PRC -  \n
                  * Content
```

* **For white color** -

```
> Use case - 	For colored text
> Current Markdown -  <PUSHText color="white">PUSH</PUSHText>
> Backward compatibility - [w: textcontent]
> Implementation -  <PUSHText color="white">w2w chat</PUSHText>
```

* **For any color in hexcode** -

```
> Use case - 	For colored text
> Current Markdown -  <PUSHText color="#ANYHEXCODE"> Hello world </PUSHText>
> Backward compatibility - Not present in previous version
> Implementation -  <PUSHText color="#00FF00"> Push Nodes </PUSHText>
```

* Push **Primary colored Text** -

```
> Use case - 	For colored text
> Current Markdown -  <PUSHText color="primary">Hello World </PUSHText>
> Backward compatibility - [d: textcontent]
> Implementation - <PUSHText color="primary"> Analytics dashboard </PUSHText>
```

* Push **Secondary colored Text** -

```
> Use case - 	For colored text
> Current Markdown -  <PUSHText color="secondary">Hello World </PUSHText>
> Backward compatibility - [s: textcontent]
> Implementation - <PUSHText color="secondary">EPNS Dapp </PUSHText>
```

* Push **Tetiary colored Text**

```
> Use case - 	For colored text
> Current Markdown -  <PUSHText color="tertiary">Hello World </PUSHText>
> Backward compatibility - [t: textcontent]
> Implementation - <PUSHText color="tertiary">EPNS Browser extension</PUSHText>
```

* **For Underlined, Red Colored Text**

```
> Use case - For URL’s
> Current Markdown - <EPNSLink color="red">[EPNS Website](https://www.epns.io) </EPNSLink>
> Backward compatibility - [u: textcontent]
> Implementation - <PUSHText color="green" link="https://www.google.com">Hello World </PUSHText>
```
