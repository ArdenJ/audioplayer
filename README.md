# React Audio Player

The intention of this project was to make a small audio player component that could render embedded data in src audio file.

## Getting Started

To quickly run this on your machine follow the instructions below. after running 'npm start' you can open the project in your browser at localhost:3000.

```
git clone https://github.com/ArdenJ/audioplayer.git .
npm i
npm start
```

A live demo of the project can be viewed on Codesandbox [here](https://codesandbox.io/s/github/ArdenJ/audioplayer).

## Using this project as a component

Only the source prop is required to start using the component. The additional trackTitle and trackArtist props may also be specified and will take priority over any embedded data in the audio file.

```js
<Player
  source={URL OR PATH TO AUDIO FILE} // required
  text={USER DEFINED TEXT (E.G. LYRICS OR TRANSCRIPT)} // optional
  trackTitle={STRING DESCRIBING THE TRACK TITLE} // optional
  trackArtist={STRING DESCRIBING THE ARTIST} // optional
/>
```

If there is no embedded data in the audio file and the user has not passed in the title and artist as props, then the component will fall back to 'Unknown' in each case.

## To Dos

- Improve flexibility of data
- Implement context (there is some prop-drilling)
- Make component more accessible (generate alt text for images)
- Add loading states
- Improve load time to read ID3 data
- improve UX (e.g. click away to close info modal)

## Built With

- [React](https://reactjs.org/) - The web framework used
- [Styled-Components](https://styled-components.com/) - for styling
- [jsmediatags](https://www.npmjs.com/package/jsmediatags) - used to extract embedded data tags

## Acknowledgments

Claps to the following examples/articles who variously inspired this project or helped solve an issue I faced while creating it:

- [Nachoperassi](https://codesandbox.io/s/5wwj02qy7k) made a cool audio player that has a great progress bar!
- [Koteswar Rao](https://medium.com/@koteswar.meesala/convert-array-buffer-to-base64-string-to-display-images-in-angular-7-4c443db242cd) wrote a great Medium article about converting an array buffer to a base64 string
