import { song_list } from "../../lib/song-list";

const hoge = (e: {
  title: string,
  author: string,
}) => {
  return <li>{e.author || ""}, <strong>{e.title || ""}</strong></li>
}

export default function Home() {
  return <ol>{song_list.map(e => hoge(e)).slice(1)}</ol>
}
