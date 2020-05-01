# Button

## Attributes

The Button component accepts all of the same attributes as the traditional HTML <button \/>, but also includes the following aditional attributes.

| Attribute | Value | Default | Description |
| :--- | :--- | :--- | :--- |
| preset | null <br/> primary <br/> secondary | null | Specifies which button style to use |
| fill | solid <br/> label | solid | Specifies whether the button is filled with a solid colour, or appears as just text |
| lift | true <br/> false | false | Specifies if the button should have a lift animation on hover and focus |
| hoverhighlight | true <br/> false | true | Specifies if the button should have a highlight effect on hover |
| activehighlight | true <br/> false | true | Specifies if the button should have a highlight effect when active. Note: if you have set lift to true, activehighlight will be false, regardless if you have also set it to true. The two can only be used exclusively |
| level | 0, 1, 2, <br/> 3, 4, 5 | 0 | Specifies the level of shadow to be applied. It is recommeneded not to go above 2 |