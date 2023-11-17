import Image from "next/image"
import { PortableText } from "@portabletext/react"
import { format } from 'date-fns';

type Props = {
    title: string,
    image: string,
    abstract: any,
    slug: string,
    date: string,
}

const serializers = {
    types: {
        code: (props: any) => (
            <pre data-language={props.node.language}>
                <code>{props.node.code}</code>
            </pre>
        ),
    },
}

export default function MiniCard({ title, image, abstract, slug, date }: Props) {
    return (
        <div className='flex flex-row gap-6 m-4'>
            <div className="bg-blog-200 w-[192px]  flex-none flex items-center rounded-lg">
                <Image src={image} alt="illustration image for blog post" width={256} height={256} className="p-4" />
            </div>
            <div className="flex flex-col flex-grow mr-4">
                <div className="mb-4 font-semibold flex-none text-emph1">{title}</div>
                <div className="text-sm text-indigo-950 flex-grow text-justify"><PortableText value={abstract}></PortableText></div>
                <div className="flex-none flex flex-row mt-4 items-end">
                    <div className="text-sm text-emph1">{format(new Date(date), "MMMM do yyyy")}</div>
                    <div className="flex-grow"></div>
                    <a className="flew-none bg-blog-200 hover:bg-blog-300 border border-blog-300 px-2 py-1 cursor pointer rounded-sm text-sm" href={"/p/" + slug}>Read more ...</a>
                </div>
            </div>
        </div>
    )
}
