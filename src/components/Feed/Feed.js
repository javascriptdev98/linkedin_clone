import React, { useEffect, useState } from 'react'
import "./Feed.css"
import { Create, Image, Subscriptions, EventNote, CalendarViewDay } from '@mui/icons-material'

import InputOption from "../inputoption/InputOption"

import Post from "../post/Post"
import firebase from 'firebase/compat/app'

import { db } from "../../firebase/firebase"

import { selectUser } from "../../features/userSlice"
import { useSelector } from 'react-redux'
import FlipMove from 'react-flip-move'



function Feed() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => (
        {
          id: doc.id,
          data: doc.data()
        }
      )))
    })
  }, [])

  const sendPost = e => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      // photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    setInput("");
  }

  return (
    <div className='feed'>
      <div className='feed__inputContainer'>


        <div className='feed__input'>
          <Create />
          <form onSubmit={sendPost}>
            <input type="text" value={input} onChange={e => setInput(e.target.value)} />
            <button type="submit">Send</button>
          </form>

        </div>
        <div className='feed__inputOptions'>
          <InputOption title="Photo" Icon={Image} color="#70B5F9" />
          <InputOption title="Video" Icon={Subscriptions} color="#E7A33E" />
          <InputOption title="Event" Icon={EventNote} color="#C0CBCD" />
          <InputOption title="Write article" Icon={CalendarViewDay} color="#7FC15E" />

        </div>

      </div>

      {/* posts */}
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post key={id} name={name} description={description} message={message} photoUrl={photoUrl} />
        ))}
      </FlipMove>



    </div>
  )
}

export default Feed