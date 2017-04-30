# react-ilyabirman-likely

React wrapper for [Likely](http://ilyabirman.ru/projects/likely/) library by Ilya Birman

## Install

Using `npm`:
```
npm install --save react-ilyabirman-likely
```

Using `yarn`:
```
yarn add react-ilyabirman-likely
```  

## Usage example

```javascript
import React, {Component} from 'react';
import Likely, {
  Facebook, 
  Twitter, 
  Gplus, 
  Vkontakte,
  Pinterest, 
  Odnoklassniki, 
  Telegram, 
  Linkedin
} from 'react-ilyabirman-likely'

export default class App extends Component {
  render() {
    return (
      <Likely size={'small'} skin={'light'}>
        <Facebook>Share on Facebook</Facebook>
        Twitter via="your_twitter_account">Share on Twitter</Twitter>
        <Gplus>Share on Google Plus</Gplus>
        <Vkontakte>Share on Vkontakte</Vkontakte>
        <Pinterest media="https://example.com/image.jpg">Share on Pinterest</Pinterest>
        <Odnoklassniki>Share on Odnoklassniki</Odnoklassniki>
        <Telegram text="text example">Share on Telegram</Telegram>
        <Linkedin>Share on Linkedin</Linkedin>
      </Likely>
    )
  }
}
```

# Using styles

CSS style published in the file `dist/styles`, if you want to use built-in styles, you 
need to include it into your project somehow. For example, if you use Webpack, and you use
special loaders for css, you can do something like this:

```javascript
import styles from 'react-ilyabirman-likely/dist/styles.css'
```

