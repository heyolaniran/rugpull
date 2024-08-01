import React from "react"

export interface CustomCodeEditorProps {

    contract : string
    setContract: React.Dispatch<React.SetStateAction<string>>
    analyze : () => Promise<void>
}