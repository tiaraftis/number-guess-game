# 📋 Project 2: Guess a Number Game

## Create a number guessing game with a simple interface

Guess a number between 1 and 100 in as few attempts as possible.

_This will require you to populate the HTML with the necessary elements for the front-end user experience and then implement the JavaScript logic._

## ⚡ Quickstart

### MacOS / WSL / Linux / ChromeOS

Clone the repository (replacing `USERNAME`):

```bash
git clone https://github.iu.edu/i365sp2026/USERNAME-project-02.git
cd USERNAME-project-02
```

## 📱 Interface && Game Play

### 📝 Requirements

- `Optional`: Use `Bootstrap` to help you with the layout. For example, it can be used to [make a button](https://getbootstrap.com/docs/5.3/components/buttons/).
- `H1/H2/P/etc...`: Interface should include a `title for the game` and `directions for what to do / expect`
  (We DO NOT expect yours to look EXACTLY like ours, but ours should give you an idea of some of the things we're looking for)
- `GUESS BUTTON`: Use the provided form `INPUT` element paired with a button to get a number from the user; this is the user’s **guess**. (The `type` can be set to `text` or `number` but do make sure to validate the input.)
- We're looking for **three or more commits** this time.

```html
<input type="text" id="inputGuess" name="inputGuess" placeholder="Make a guess"/>
<!-- To get the number entered by the user, you want the element’s **value**
If Element.textContent gets the content of a P tag, then Element.value gets the content of an INPUT tag -->
```

- `REPLAY BUTTON`: Allow the game to be played again
- `DIV`: Create a space for messages to the user updating their progress (too high / too low / guessed it);

### 💁🏻‍♀️ Tips

- [Number.isInteger()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger)
- If the `number` is not valid (either not a number or out of range), display an appropriate error message
- Display the `number` of that guesses have been made so far, and keep this value updated in the interface
- When the `number` is correctly guessed, `INPUT` and `GUESS` button are disabled, and the only option is to `REPLAY`;
- If you want to _disable_ the button and the input with an attribute (possible methods to modify HTML attributes are in Chapter 5). Anything given an attribute of `“disabled”` can then be styled in the CSS, for example:

```
*:disabled {
    background-color: lightgray;
    color: #333333;
    opacity: 0.8;
    pointer-events: none;
}
```

Or, because we are using Bootstrap, [_you could look up how to do this in their documentation._](https://getbootstrap.com/docs/4.0/components/buttons/#disabled-state)

## 📜 Expectations

- Create your project *individually*. It is not a group assignment.
- Design and layout should meet expectations similar to i360's CARP design principles (contrast, alignment, repetition and proximity), good hierarchy, plus well structured HTML and CSS
- Use functions, good naming and syntax conventions, and comments as needed - remember the goal is _self-commenting code_
- If you look up code / techniques we have not introduced in class, it would be wise to _explain in a comment what you are doing_, why, and _link_ to where you learned it
- Create Project 2 by making a local clone of your IU GitHub repository
- Submit your work by *commiting regularly*, then syncing with your IU Github repository by the deadline

## 📚 Recommended Steps

1.  First make the number guessing game purely in the JavaScript (and the console) with no HTML elements at all. Use `prompt()` to take user inputs, and `console.log()` to output feedback. Make sure all the game logic works, including checking the validity of the user input and tracking the number of guesses.
2.  Next, add in the _minimal_ number of HTML elements for an interactive game (e.g. input text fields, buttons).
3.  Integrate the HTML interface with your coded JavaScript game.
4.  Finally, use CSS to create a usable interface, adding in additional elements and resources as needed.
5.  Remember, *manually test often*, test along the way, and test after you’re done! Edge cases, for example, might be non-numbers, non-integers and numbers that are not in range.

## 🏆 Submission

Push your changes to Github (Replacing `COMMIT_MESSAGE`) and submit your repository link on Canvas

```bash
git add .
git commit -m <COMMIT-MESSAGE>
git push
```

## Rubric

|                  | Maximum Points | Description                                                          |
| ---------------: | :------------: | :------------------------------------------------------------------- |
|        Interface |       2       | Design and layout meet expectations                                  |
|        Game Play |       5       | Game functionality, including tracking guesses                       |
|           Replay |       1       | Game can be played again                                             |
| Coding Practices |       2       | Naming of functions and variables, use of functions, regular commits |
|                  |                |                                                                      |
|        **Total** |    **10**     |                                                                      |
