declare module '@bam.tech/native-navigation' {
    import { Component, ReactElement } from 'react'
    import { NavigatorProps, WrappedScreen } from '@bam.tech/native-navigation'

    export enum ScreenType {
        SCREEN = 'screen',
        TABS = 'tabs',
    }

    interface ScreenOptions {
        waitForRender?: boolean
        initialConfig?: NavigatorProps
        mode?: ScreenType
    }

    /* eslint-disable */
    export default class Navigator extends Component<NavigatorProps> {
        /* eslint-enable */
        private constructor()

        static Config: (props: NavigatorProps) => JSX.Element

        static isScreenRegistered(screenName: string): boolean
        static registerScreen(
            screenName: string, //
            sceneThunk: Element,
            options?: ScreenOptions
        ): WrappedScreen | any

        static push(
            screenName: string, //
            props?: NavigatorProps,
            options?: ScreenOptions
        ): Promise<WrappedScreen>

        static present(
            screenName: string, //
            props?: NavigatorProps,
            options?: ScreenOptions
        ): Promise<WrappedScreen>

        static resetTo(
            screenName: string, //
            props?: NavigatorProps,
            options?: ScreenOptions
        ): Promise<WrappedScreen>

        static showModal(
            screenName: string, //
            props?: NavigatorProps,
            options?: ScreenOptions
        ): Promise<WrappedScreen>

        static pop(
            payload?: { [key: string]: any }, //
            animated?: boolean
        ): void

        static dismiss(
            payload?: { [key: string]: any }, //
            animated?: boolean
        ): void
    } // eslint-disable-line
}
