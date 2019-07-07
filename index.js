const readline = require('readline-sync')
function start(){
    const content ={}

    content.searTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()
    function askAndReturnSearchTerm(){
        return readline.question('Termo de pesquisa na Wikipedia: ')
    }
    function askAndReturnPrefix(){
        const prefixes =['Who is','What is', 'The History of']
        const selectedPrefixIndex = readline.keyInSelect(prefixes,'Choose one option: ')
        const selectedPrefixText = prefixes[selectedPrefixIndex]
        
        return selectedPrefixText
    }
    console.log(content)
}
start()