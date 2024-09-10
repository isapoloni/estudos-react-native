import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export const styles = StyleSheet.create({
    containerCard: {
        backgroundColor: colors['gray-500'],
        borderWidth: 1,
        borderColor: colors['gray-400'],
        marginTop: 20,
        borderRadius: 8,
        padding: 12,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textCard: {
        color: colors['gray-100'],
        fontSize: 14,
        flex: 1, 
        marginLeft: 5,
    }
});
