# React Audio Player

The intention of this project was to make a small audio player component that could render embedded data in src audio file. 

## Getting Started

To quickly run this on your machine follow the instructions below. after running 'npm start' you can open the project in your browser at localhost:3000.

```
git clone https://github.com/ArdenJ/audioplayer.git .
npm i
npm start
```

A live demo of the project can be viewed on Codesanbox [here](https://codesandbox.io/s/github/ArdenJ/audioplayer).

## Using this project as a component 

Only the source prop is required to start using the component. The additional trackTitle and trackArtist props may also be specified and will take priority over any embedded data in the audio file.

```js
<Player 
source={URL OR PATH TO AUDIO FILE} // required
trackTitle={STRING DESCRIBING THE TRACK TITLE} // optional
trackArtist={STRING DESCRIBING THE ARTIST} // optional
```

If there is no embedded data in the audio file and the user has not passed in the title and artist as props, then the component will fall back to 'Unknown' in each case.  

## Built With

* [React](https://reactjs.org/) - The web framework used
* [Styled-Components](https://styled-components.com/) - for styling
* [jsmediatags](https://www.npmjs.com/package/jsmediatags) - used to extract embedded data tags

## Acknowledgments

Claps to the following examples/articles who variously inspired this project or helped solve an issue I faced while creating it: 

* 
* 
* 
