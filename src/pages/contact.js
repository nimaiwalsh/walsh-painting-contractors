import React, { Component } from 'react'
import { navigateTo } from 'gatsby-link'
import Img from 'gatsby-image'
import Recaptcha from 'react-google-recaptcha'

import FadeInUp from '../components/FadeInUp'
import {
  PageContainer,
  PageContentContainer,
  Button,
} from '../page-styles/PageComponents'
import {
  ContactPageContainer,
  FormContainer,
  FormBackgroundImage,
  Form,
  FormGroup,
} from '../page-styles/contact.css'
import { PageHead } from '../components/PageHead'
import { contactSVG } from '../resources/icons/index'

const RECAPTCHA_KEY = process.env.GATSBY_SITE_RECAPTCHA_KEY

/*Encode data into a useful URL*/
function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}
export default class Contact extends Component {
  constructor(props) {
    super(props)
    const { data } = this.props
    this.state = { name: '', email: '', message: '' }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  /*Used by netlify to confirm successful recapture before form submission*/
  handleRecaptcha = value => {
    this.setState({ 'g-recaptcha-response': value })
  }

  /*Netlify  parameters in here that are picked up by the bots for form submission*/
  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigateTo(form.getAttribute('action')))
      .catch(err => alert(error))
  }

  render() {
    const { name, email, message } = this.state
    const { contactFormImage } = this.props.data

    console.log(contactFormImage)
    return (
      <FadeInUp>
        <PageContainer>
          <PageHead title="Contact" icon={contactSVG} />
          <PageContentContainer>
            <FormContainer>
              <FormBackgroundImage>
                <Img className="form-image" sizes={ contactFormImage.sizes } />
              </FormBackgroundImage>
              <Form
                name="contact"
                method="post"
                action="/contact-form-success/"
                data-netlify="true"
                data-netlify-recaptcha="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <label hidden>
                  Don’t fill this out:{' '}
                  <input name="bot-field" onChange={this.handleChange} />
                </label>

                <FormGroup>
                  <input
                    name="name"
                    id="name"
                    type="text"
                    value={name}
                    placeholder="Your name"
                    onChange={this.handleChange}
                    className="input-name"
                    required
                  />
                  <label htmlFor="name">Name</label>
                </FormGroup>

                <FormGroup>
                  <input
                    name="email"
                    id="email"
                    type="email"
                    value={email}
                    placeholder="Your email"
                    onChange={this.handleChange}
                    className="input-email"
                    required
                  />
                  <label htmlFor="email">Email</label>
                </FormGroup>

                <FormGroup>
                  <textarea
                    required
                    name="message"
                    id="message"
                    type="text"
                    value={message}
                    onChange={this.handleChange}
                    className="input-message"
                  />
                  <label htmlFor="message">Message</label>
                </FormGroup>

                <Recaptcha
                  ref="recaptcha"
                  sitekey={RECAPTCHA_KEY}
                  onChange={this.handleRecaptcha}
                />

                <Button type="submit" white>
                  Submit
                </Button>
              </Form>
            </FormContainer>
          </PageContentContainer>
        </PageContainer>
      </FadeInUp>
    )
  }
}

export const query = graphql`
  query images {
    contactFormImage: imageSharp(id: { regex: "/contact-image.jpg/" }) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
