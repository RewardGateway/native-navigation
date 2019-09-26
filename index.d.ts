declare module '@bam.tech/native-navigation' {
    import { Component, ReactElement } from 'react'

    class WrappedScreen extends Component {} // eslint-disable-line

    export interface WrappedScreen {
        getChildContext(): object
    }

    interface NavigatorButtonProps {
        uri: string
        width: number
        height: number
        scale: number
    }

    interface NavigatorButton {
        image:NavigatorButtonProps
    }

    interface HasLeftButtons {
        leftButtons?: NavigatorButton[]
        onBackPress?(): void
        onLeftPress?(): void
    }

    // interface NoLeftButtons {
    //     leftButtons?: undefined
    //     onBackPress?(): void
    //     onLeftPress?(): void
    // }

    export type NavigatorProps =
    {
        title?: string
        color?: string
        backgroundColor?: number | string
        foregroundColor?: number | string
        enableLiveReload?: boolean
        translucent?: boolean
        navIcon?: object
        children?: any
        rightButtons?: NavigatorButton[]
        overrideBackPressInJs?: boolean

        onAppear?(): void
        onDisappear?(): void
        onEnterTransitionCompleted?(): void
        onBarHeightChanged?(): void
        onRightPress?(index: number): void
    } & HasLeftButtons

    export enum ScreenType {
        SCREEN = 'screen',
        TABS = 'tabs',
    }

    interface ScreenOptions {
        waitForRender?: boolean
        initialConfig?: NavigatorProps
        mode?: ScreenType
    }

    export default class Navigator extends Component<NavigatorProps> {

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
    }
}
