import MiniCard from "@/components/minicard";
import { client } from "@/sanity";

type PostType = {
    id:string,
    title:string,
    image:string,
    abstract:any,
    slug:string,    
    date:string,
}

export default async function Home() {

  const posts = await client.fetch(`*[_type == "post"] { "id":_id, title, abstract, "image": mainImage.asset->url, "slug":slug.current, "date":_createdAt } | order(date desc) `) as PostType[];

  return (
    <main className="text-emph2 w-7/12 mx-auto my-12 flex flex-col gap-4">
      { posts.map(post => <MiniCard key={post.id} {...post} />  ) }     
    </main>
  )
}
