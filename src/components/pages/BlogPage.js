import React, { Component } from 'react';
import BlogList from '../common/BlogList';

class BlogPage extends Component {
  constructor() {
    super();
    this.state = {
      posts: [
        {
          title: 'Lorem',
          tagline: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus vel accusantium fuga quas',
          body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus vel accusantium fuga quas! Accusantium ipsa quasi, iste numquam aut magnam id voluptatem similique, ut odit ducimus unde, laborum ex inventore.',
          images: ['http://fillmurray.com/200/200'],
        },
        {
          title: 'Pixum',
          tagline: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus vel accusantium fuga quas',
          body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus vel accusantium fuga quas! Accusantium ipsa quasi, iste numquam aut magnam id voluptatem similique, ut odit ducimus unde, laborum ex inventore.',
          images: ['http://fillmurray.com/200/200'],
        },
        {
          title: 'Dolor',
          tagline: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus vel accusantium fuga quas',
          body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus vel accusantium fuga quas! Accusantium ipsa quasi, iste numquam aut magnam id voluptatem similique, ut odit ducimus unde, laborum ex inventore.',
          images: ['http://fillmurray.com/200/200'],
        },
        {
          title: 'Quantum',
          tagline: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus vel accusantium fuga quas',
          body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus vel accusantium fuga quas! Accusantium ipsa quasi, iste numquam aut magnam id voluptatem similique, ut odit ducimus unde, laborum ex inventore.',
          images: ['http://fillmurray.com/200/200'],
        }
      ]
    };
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        <h1 className="display-4">Blog</h1>
        <BlogList posts={posts} />
      </div>
    );
  }
}

export default BlogPage;
