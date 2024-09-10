import { View, Text, TouchableOpacity } from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Feather from '@expo/vector-icons/Feather';

import colors from '../../styles/colors';
import { styles } from './styles'
import { useState } from 'react';

type Props = {
    task: string;
    onRemove: () => void;
}

export function Card({ task, onRemove }: Props) {
    const [isChecked, setIsChecked] = useState(false);
    console.log('task', task)

    return (
        <View style={styles.containerCard}>
            <BouncyCheckbox
                size={20}
                fillColor={isChecked ? colors['purple'] : colors['blue']}
                unFillColor={colors['gray-400']}
                innerIconStyle={{ borderWidth: 1 }}
                isChecked={isChecked}
                onPress={(checked: boolean) => setIsChecked(checked)}
                text={task}
                textStyle={[
                    styles.textCard,
                    {
                        color: colors['gray-100'], // Garante a cor correta
                        textDecorationLine: isChecked ? 'line-through' : 'none', // Adiciona risco ao texto quando marcado
                    }
                ]}
                style={{ flex: 1 }} // Garante que o checkbox ocupe a largura necessária
            />
            <TouchableOpacity onPress={onRemove}>
                <Feather name="trash-2" size={20} color={colors["gray-300"]} />
            </TouchableOpacity>
        </View>
    )
}