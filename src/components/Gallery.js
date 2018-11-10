import React, { Component } from 'react';
import Lightbox from 'react-images';
import Img from 'gatsby-image';

import { GridContainer, Grid } from './Gallery-styles'

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shareOpen: false,
      anchorEl: null,
      lightbox: false,
      photos: props.photos.map(photo => Object.assign({ srcSet: photo.sizes.srcSet })),
    };
  }

  gotoPrevLightboxImage() {
    const { photo } = this.state;
    this.setState({ photo: photo - 1 });
  }

  gotoNextLightboxImage() {
    const { photo } = this.state;
    this.setState({ photo: photo + 1 });
  }

  openLightbox(photo, event) {
    event.preventDefault();
    this.setState({ lightbox: true, photo });
  }

  closeLightbox() {
    this.setState({ lightbox: false });
  }

  render() {
    const { photos } = this.props;
    return (
      <GridContainer>
        <Grid>
          {photos.map((photo, i) => (
            <a key={i} href={photo.sizes.src} onClick={e => this.openLightbox(i, e)}>
              <Img sizes={photo.sizes} />
            </a>
          ))}
        </Grid>
        <Lightbox
          backdropClosesModal
          images={this.state.photos}
          currentImage={this.state.photo}
          isOpen={this.state.lightbox}
          onClickPrev={() => this.gotoPrevLightboxImage()}
          onClickNext={() => this.gotoNextLightboxImage()}
          onClose={() => this.closeLightbox()}
        />
      </GridContainer>
    );
  }
}

export default Gallery