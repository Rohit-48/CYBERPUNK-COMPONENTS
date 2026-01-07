"use client"

import { ThemeProvider as NextThemeProvider, ThemeProviderProps } from "next-themes"
import React from "react"

export const ThemeProvider = ({children, ...props}: ThemeProviderProps) =>{
    return(
        <NextThemeProvider {...props}>
            {children}
        </NextThemeProvider>
    )
}