

export const isValidSolidityCode = (code : string) => {

    const SPDX_REGEX = /\/\/\s*SPDX-Licence-Identifier:\s*[^\s]+/; 

    const pragmaRegex = /pragma\s+solidity\s[^;]+;/; 

    return SPDX_REGEX.test(code) && pragmaRegex.test(code)
}