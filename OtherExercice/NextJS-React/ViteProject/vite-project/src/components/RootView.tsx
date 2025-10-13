import {type ViewStyle, type ViewProps, Platform } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

type Props = ViewProps & {
    style?: ViewStyle,
    color ?: string,
};

export const RootView = ({style, color, ...rest} : Props) => {
    return (
        <SafeAreaProvider>
        <SafeAreaView style={[style, {backgroundColor: color || 'white'}, styles]} {...rest} />
        </SafeAreaProvider>
    )
}

const styles = {
    flex: 1,
    padding: 4,
    ...Platform.select({
        default: {
            gap:2,
        },
        web: {
            gap:8,
        }
    }),
} satisfies ViewStyle;