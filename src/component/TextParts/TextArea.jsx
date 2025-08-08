import React from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import Color from '@tiptap/extension-color'
import { TextStyle } from '@tiptap/extension-text-style'

import StarterKit from '@tiptap/starter-kit'
import "../../styles/editor.css"
import { useState } from 'react'

export default function TextArea() {
    const [_, setEditorUpdated] = useState(0)

    const editor = useEditor({
        extensions: [
            StarterKit,
            TextStyle,
            Color,
        ],
        content: '<p></p>',
        onUpdate: () => {
            setEditorUpdated((prev) => prev + 1)
        },
    })
    return (
        <div className="flex flex-col h-85/100 w-full">
            <MenuBar editor={editor} />


            <div className="editor w-95/100 h-70/100 m-auto mt-0 border-2 border-solid border-[var(--border-color)] rounded-lg hide-scrollbar">
                <EditorContent editor={editor} className="text-[var(--text-color)] h-full editor-holder hide-scrollbar text-left p-2" />
            </div>
        </div>
    )
}

function MenuBar({ editor }) {
    const [selectedColor, setSelectedColor] = React.useState(null)

    if (!editor) return null

    const colors = [
        { name: 'Red', color: 'red' },
        { name: 'Orange', color: 'orange' },
        { name: 'Yellow', color: 'yellow' },
        { name: 'Green', color: 'green' },
        { name: 'Blue', color: 'blue' },
        { name: 'indigo', color: 'indigo' },
        { name: 'Purple', color: 'purple' },
        
    ]

    const applyColor = (color) => {

        if (!editor) return

        if (selectedColor === color) {
            editor.chain().focus().unsetColor().run()
            setSelectedColor(null)
        } else {
            editor.chain().focus().setColor(color).run()
            setSelectedColor(color)
        }
    }

    return (
        <div className="m-auto mb-0 flex flex-wrap rounded-lg border-2 border-solid border-[var(--border-color)] w-95/100 h-24/100">
            <MenuButton
                commandFn={(checkOnly = false) =>
                    checkOnly
                        ? editor.can().chain().focus().toggleBold().run()
                        : editor.chain().focus().toggleBold().run()
                }
            >
                𝓑
            </MenuButton>

            <MenuButton
                commandFn={(checkOnly = false) =>
                    checkOnly
                        ? editor.can().chain().focus().toggleItalic().run()
                        : editor.chain().focus().toggleItalic().run()
                }
            >
                𝐼
            </MenuButton>

            <MenuButton
                commandFn={(checkOnly = false) =>
                    checkOnly
                        ? editor.can().chain().focus().toggleStrike().run()
                        : editor.chain().focus().toggleStrike().run()
                }
            >
                S
            </MenuButton>

            <MenuButton
                commandFn={(checkOnly = false) =>
                    checkOnly
                        ? editor.can().chain().focus().toggleCode().run()
                        : editor.chain().focus().toggleCode().run()
                }
            >
                ;
            </MenuButton>

            <MenuButton
                commandFn={(checkOnly = false) =>
                    checkOnly
                        ? editor.can().chain().focus().toggleHeading({ level: 1 }).run()
                        : editor.chain().focus().toggleHeading({ level: 1 }).run()
                }
            >
                !
            </MenuButton>

            {colors.map(({ color }) => (
                <button
                    key={color}
                    onClick={() => applyColor(color)}
                    style={{
                        backgroundColor: selectedColor === color ? color : 'var(--bg-color)',
                        color: selectedColor === color ? 'var(--bg-color)' : color,
                    }}
                    className="px-2 py-1 rounded hover:bg-[var(--text-color)] hover:text-[var(--bg-color)] transition-colors"
                >
                    {color[0]}
                </button>
            ))}

        </div>
    )
}

function MenuButton({ commandFn, children }) {

    const [isActiveClass, setIsActiveClass] = React.useState(false)

    const handleClick = () => {
        setIsActiveClass((prev) => !prev)
        commandFn()
    }

    return (
        <button
            onClick={handleClick}
            disabled={!commandFn(true)}
            className={`text-sm  rounded-0 transition-colors
        ${!isActiveClass
                    ? 'bg-[var(--text-color)] text-[var(--bg-color)]'
                    : 'bg-[var(--bg-color)] text-[var(--text-color)] hover:bg-[var(--text-color)] hover:text-[var(--bg-color)]'
                }
    disabled:opacity-50 disabled:cursor-not-allowed style-button
      `}
        >
            {children}
        </button>
    )
}


