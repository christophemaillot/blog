import { client } from "@/sanity"
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { format } from 'date-fns';
import { Link } from "lucide-react";

type Link = {
    url: string,
    title: string,
    description: string,
}

type PostType = {
    id:string,
    title:string,
    image:string,
    body:any,
    slug:string,
    date:string,
    links:Link[],
}

export default async function BlogPost({params}:{ params: { slug: string } }) {
    const slug = params.slug

    const posts = await client.fetch(`*[_type == "post" && slug.current == \"${slug}\"] { "id":_id, title, body, "image": mainImage.asset->url, "slug":slug.current, "date": _createdAt, links}`) as PostType[];
    const post = posts[0]

    return (
        <div className="md:w-7/12 mx-auto">
            <div className="flex flex-row my-8 gap-8">
                <Image src={post.image} alt="illustration image for blog post" width={128} height={128} className="p-4 border border-blog-200 rounded-lg bg-blog-200" />
                <div className="flex flex-col">    
                    <h1 className="text-emph1 font-bold mb-2 text-lg">{post.title}</h1>
                    <div className="text-sm text-emph2">{format(new Date(post.date), "MMMM do yyyy")}</div>
                </div>
                
            </div>
            
            <div className="text-emph2 flex-grow text-justify leading-8">
                <PortableText value={post.body} />
            </div>

            <div className="border-t border-blog-200 mt-8 pt-8">
                <ul>
                    { 
                        post.links && post.links.map( link => <li key={link.url} className="text-emph2 text-sm mb-2 flex"><a className="text-emph1 cursor-pointer" href={link.url}><span className="flex"><Link className="w-4 h-4 mr-2"/> {link.title}</span></a>&nbsp;: {link.description}</li>)
                    }
                </ul>                
            </div>
        </div>
    )
}