import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function Paragraph() {

    const useContext = useContext(ThemeContext)

    return (
        <p className={context.theme}>
            Hello World
        </p>
    )
}

export default Paragraph