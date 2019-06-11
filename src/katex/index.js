import katex from 'katex'

const map = {
  '&lt;': '<',
  '&gt;': '>',
  '&amp;': '&',
  '&quot;': '"',
  '&nbsp;': ' ',
  '&prime;': '’',
  '\n': '<br/>',
  '\{split\}': '{aligned}',
  '\\overparen': '\\overgroup',
  '\\mbox': '\\text'
}

export default {
  render(str) {
    return str.replace(new RegExp('(' + Object.keys(map).join('|') + ')', 'g'), (match, $1) => map[$1])
          .replace(/&#(\d+);/g, (match, $1) => String.fromCodePoint($1))
          .replace(/(\$)([\s\S]*?)(\$)/g, (match, $1, $2, $3) => {
            $2 = $2.replace(/<br\/>/gi, '\n')
            return katex.renderToString(String.raw`${$2}`, {
              throwOnError: false,
              displayMode: false,
              strict (errorCode, errorMsg, token) {
                let flag
                switch (errorCode) {
                  case 'unknownSymbol':
                  case 'unicodeTextInMathMode':
                    flag = 'ignore'
                    break
                  case 'mathVsTextUnits':
                  case 'commentAtEnd':
                    flag = 'error'
                    break
                  default:
                    flag = 'ignore'
                }
                return flag
              }
            })
          })
          .replace(/(\\\()([\s\S]*?)(\\\))/g, (match, $1, $2, $3) => {
            $2 = $2.replace(/<br\/>/gi, '\n')
            return katex.renderToString(String.raw`${$2}`, {
              throwOnError: false,
              displayMode: false,
              strict (errorCode, errorMsg, token) {
                let flag
                switch (errorCode) {
                  case 'unknownSymbol':
                  case 'unicodeTextInMathMode':
                    flag = 'ignore'
                    break
                  case 'mathVsTextUnits':
                  case 'commentAtEnd':
                    flag = 'error'
                    break
                  default:
                    flag = 'ignore'
                }
                return flag
              }
            })
          })
          .replace(/(\\\[)([\s\S]*?)(\\\])/g, (match, $1, $2, $3) => {
            $2 = $2.replace(/<br\/>/gi, '\n')
            return katex.renderToString(String.raw`${$2}`, {
              throwOnError: false,
              displayMode: true,
              strict (errorCode, errorMsg, token) {
                let flag
                switch (errorCode) {
                  case 'unknownSymbol':
                  case 'unicodeTextInMathMode':
                    flag = 'ignore'
                    break
                  case 'mathVsTextUnits':
                  case 'commentAtEnd':
                    flag = 'error'
                    break
                  default:
                    flag = 'ignore'
                }
                return flag
              }
            })
          })
  }
}
