import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'ajonp-tabs',
  styleUrl: 'ajonp-tabs.scss'
})
export class Tabs {

  @Prop() first: string;

  @Prop() last: string;

  render() {
    return (
      <div>
        Hello, my name is {this.first} {this.last}
      </div>
    );
  }
}
