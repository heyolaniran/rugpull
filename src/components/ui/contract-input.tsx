import Editor from "react-simple-code-editor";

import Prism from 'prismjs' ; 
import "prismjs/components/prism-solidity"
import "prismjs/themes/prism-tomorrow.css"
import { CustomCodeEditorProps } from "@/interfaces/CustomCodeEditorProps";
import { isValidSolidityCode } from "@/libs/isSolidityCode";

export default function CustomCodeEditor ({contract , setContract , analyze} : CustomCodeEditorProps) {

    const handleAnalyze = () => {
        if(!isValidSolidityCode(contract)) {
            alert('Invalid Solidity contract')
            return ; 
        }
    }
}
