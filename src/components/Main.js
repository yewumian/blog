require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

let imagesDatas = require('../data/images.json');

imagesDatas = imagesDatas.map((obj)=> {
  return obj.imagesURL = require('../images/' + obj.fileName);
});


class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="ima-sec">
        </section>
        <nav className="controller-nav">
        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
