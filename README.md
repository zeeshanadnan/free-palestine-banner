> "Even the birds in Gaza know the story.. they have two wings and do not migrate!" - Youssef Al-Damouki

# 🇵🇸 FreePalestine Banner

This is a small javascript library to add a simple banner in your website to show your support for the people of Palestine, their freedom, their dreams, their life.

## ✏️ How to use

Just use the below code in your website with already pre compiled js files

```html
<script src="https://cdn.jsdelivr.net/gh/zeeshanadnan/free-palestine-banner@main/dist/free-palestine-banner-1.0.2.js"></script>
<script>
  freePalestine.createBanner({
    position: "free-palestine-position-top",
    statement: "We stand in solidarity with the people of palestine.",
    externalLink: "https://blog.paulbiggar.com/i-cant-sleep/",
  });
</script>
```

## Config

| Parameter      | Type         | Description                                                                                                                 |
| :------------- | :----------- | :-------------------------------------------------------------------------------------------------------------------------- |
| `position`     | `string`     | Sets where to put the banner. Currently either top or bottom [`free-palestine-position-top`, `free-palestine-position-top`] |
| `statement`    | `string`     | Put a custom message to show support or will be set to a default one                                                        |
| `externalLink` | `url string` | If you want to link to some external resource url can put here                                                              |

## Preview

![Screenshot](img/free-palestine.png)
