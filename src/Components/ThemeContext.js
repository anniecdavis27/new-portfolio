import React, { createContext, useContext, useState } from "react";
import styled, { ThemeProvider } from 'styled-components';
import { backgroundColor, textColor } from './theme';

const ThemeToggleContext = createContext();
export const useTheme = () => useContext(ThemeToggleContext);
export const MyThemeProvider = ({ children }) => {

    const [themeState, setThemeState] = useState({
        mode: 'dark'
    });

    const Wrapper = styled.div`
        background-color: ${backgroundColor};
        color: ${textColor};
        border: ${textColor};
        height: 100vh;
    `;

    const toggle = () => {
        const mode = (themeState.mode === 'light' ? `dark` : `light`);
        setThemeState({ mode: mode });
    };

    return (
        <ThemeToggleContext.Provider value={{ toggle: toggle }}>
            <ThemeProvider
                theme={{
                  mode: themeState.mode
                }}
            >
                <Wrapper>
                    {children}
                </Wrapper>
            </ThemeProvider>
        </ThemeToggleContext.Provider>
    );
  };

export default ThemeProvider;