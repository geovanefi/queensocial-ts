import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/93933011?v=4" ,
      job: 'Cientista',
      name: 'Felicio Junior'
    },
    content: [
      { type: 'paragraph', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, suscipit.Lorem ipsum, suscipit.'},
      { type: 'paragraph', content: 'Lorem ipsum, Amet consectetur adipisicing elit. Nostrum, suscipit.'},
      { type: 'paragraph', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, suscipit.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, suscipit.'},

      {type: 'link', content: 'linkedin.com/geovanejr00'}
        
    ],
    publishAt: new Date('2022-08-03 11:24:52'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/93933011?v=4" ,
      job: 'Garoto de Progamar',
      name: 'Geovane Felicio',
    },
    content: [
      { type: 'paragraph', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, suscipit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.'},
      { type: 'paragraph', content: 'Lorem ipsum, Amet consectetur adipisicing elit. Nostrum, suscipit.'},
      { type: 'paragraph', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, suscipit.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, suscipit.'},

      {type: 'link', content: 'github.com/geovanefi'}
        
    ],
    publishAt: new Date('2022-08-21 11:24:52'),
  },
  
]


export function App() {
  return (
    <div >

      <Header />
      
      <div className={ styles.wrapper }>
        <Sidebar />
        
        <main>
          {posts.map(post =>{
            return (
              <Post 
              key={post.id} //Para cancelar o erro, preciso informar uma chave única. Nesse caso é o ID do post
              author={post.author}
              content={post.content}
              publishAt={post.publishAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

