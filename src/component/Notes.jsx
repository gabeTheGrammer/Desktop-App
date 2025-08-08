
import TextArea from "./TextParts/TextArea";
import StarterKit from '@tiptap/starter-kit'

export default function Notes() {

    return (
        <div className="h-full w-full">
            <h1 className="h-10/100 text-[var(--text-color)] mb-2">Notes:</h1>
            <TextArea />
        </div>
    )
}