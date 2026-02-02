import CreatePost from './CreatePost'
import Post from './Post'

export default function CenterColumn() {
  return (
    <div className="space-y-4">
      <CreatePost />
      <Post />
      <Post />
      <Post />
    </div>
  )
}
