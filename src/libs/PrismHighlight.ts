
import Prism from 'prismjs'
export const PrismHighlight =  ({code} : { code : string}) => {

    return Prism.highlight(code, Prism.languages.solidty, 'solidity')

}