import { createContext, PureComponent } from "react";

export const themes = {
    light: {
        backgroundColor: 'rgb(242, 242, 247)',
        color: 'rgb(28, 28, 30)',
        key: 'light'
    },
    dark: {
        backgroundColor: 'rgb(28, 28, 30)',
        color: 'rgb(242, 242, 247)',
        key: 'dark'
    }
}

export const ThemeContext = createContext({ theme: themes.dark, switchTheme: () => { } })
class ThemeProvider extends PureComponent {
    constructor(props) {
        super(props);

        this.switchTheme = () => {
            this.setState(state => ({
                theme: state.theme === themes.dark ? themes.light : themes.dark
            }))
        }

        this.state = {
            theme: themes.dark,
            switchTheme: this.switchTheme
        }
    }

    changeDefaultMatchDark = (matches) => {
        this.setState({
            theme: matches ? themes.dark : themes.light
        });
    }

    componentDidMount() {
        const darkMode = window.matchMedia('(prefers-color-scheme: dark)');

        this.changeDefaultMatchDark(darkMode.matches);

        darkMode.addEventListener('change', ({ target }) => {
            this.changeDefaultMatchDark(target.matches);
        });
    }


    componentDidUpdate() {
        const main = document.documentElement;

        main.style.setProperty('--background-color', this.state.theme.backgroundColor);
        main.style.setProperty('--color', this.state.theme.color);
    }

    render() {
        const { children } = this.props
        return (
            <ThemeContext.Provider value={this.state}>
                {children}
            </ThemeContext.Provider>
        )
    }
}

export default ThemeProvider;
