import React, { Component } from 'react';
import showdown from 'showdown';
import { MarkdownPreview } from './MarkdownPreview';

const converter = new showdown.Converter();

export class Talk extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showMarkdown: false
    };
  }

  render() {
    const talk = this.props.talk;
    return (
      <li className="collection-item" style={{ borderBottom: '1px solid #ddd', marginBottom: 10 }}>
        <div className="row">
          <div className="input-field col s10">
            <input id="name"
                   type="text"
                   className="validate"
                   value={talk.name[this.props.lang]}
                   onChange={e => this.props.setState({ ...talk, name: { [this.props.lang]: e.target.value } })} />
            <label for="name">Name</label>
          </div>
          <div className="col s2">
            <MarkdownPreview id={talk.id} markdown={talk.abstract[this.props.lang]} />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <textarea
              className="materialize-textarea"
              value={talk.abstract[this.props.lang]}
              onChange={e => this.props.setState({ ...talk, abstract: { [this.props.lang]: e.target.value } })}></textarea>
            <label htmlFor="textarea1">Your talks abstract</label>
          </div>
        </div>
      </li>
    );
  }
}
