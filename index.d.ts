import { Component } from 'react'

declare module '@bam.tech/native-navigation' {
    class WrappedScreen extends Component {} // eslint-disable-line

    interface WrappedScreen {
        getChildContext(): object
    }

    export interface NavigatorProps {
        title: string
        color: string
        backgroundColor: number | string
        foregroundColor: number | string
        enableLiveReload?: boolean
        translucent?: boolean
        navIcon?: object
        leftButtons?: object[]
        children?: any
        rightButtons?: object[]
        overrideBackPressInJs?: boolean

        onAppear?(): void
        onDisappear?(): void
        onEnterTransitionCompleted?(): void
        onBarHeightChanged?(): void
        onRightPress?(index: number): void
        // onBackPress?(): void
        onLeftPress?(): void
    }

    export default class Navigator {
        private constructor()
        static isScreenRegistered(screenName: string): boolean
        static registerScreen(
            screenName: string,
            sceneThunk: Component,
            options?: { [key: string]: any }
        ): WrappedScreen
        static push(screenName: string, props?: NavigatorProps, options?: { [key: string]: any })
        static present(screenName: string, props?: NavigatorProps, options?: { [key: string]: any })
        static resetTo(screenName: string, props?: NavigatorProps, options?: { [key: string]: any })
        static showModal(screenName: string, props?: NavigatorProps, options?: { [key: string]: any })
        static pop(payload?: () => void, animated?: boolean): void
        static dismiss(payload?: () => void, animated?: boolean): void
    }
}
