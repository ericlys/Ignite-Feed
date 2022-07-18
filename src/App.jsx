import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
        <Post 
          author="Diego Fernandes" 
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium amet adipisci blanditiis beatae non ratione asperiores, libero quod, perspiciatis eius voluptas iusto voluptatum maxime. Delectus quia corrupti in asperiores earum." 
        />
        <Post 
          author="Diego Fernandes" 
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium amet adipisci blanditiis beatae non ratione asperiores, libero quod, perspiciatis eius voluptas iusto voluptatum maxime. Delectus quia corrupti in asperiores earum." 
        />
        </main>
      </div>
    </div>
  )
}
